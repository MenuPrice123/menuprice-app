import fs from 'node:fs/promises'
import path from 'node:path'
import zlib from 'node:zlib'

function crc32(buf) {
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i]
    for (let j = 0; j < 8; j++) {
      const mask = -(crc & 1)
      crc = (crc >>> 1) ^ (0xedb88320 & mask)
    }
  }
  return (crc ^ 0xffffffff) >>> 0
}

function pngChunk(type, data) {
  const typeBuf = Buffer.from(type)
  const lenBuf = Buffer.alloc(4)
  lenBuf.writeUInt32BE(data.length, 0)

  const crcBuf = Buffer.alloc(4)
  const crc = crc32(Buffer.concat([typeBuf, data]))
  crcBuf.writeUInt32BE(crc, 0)

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf])
}

function makeSolidPng({ width, height, rgba }) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr.writeUInt8(8, 8) // bit depth
  ihdr.writeUInt8(6, 9) // color type RGBA
  ihdr.writeUInt8(0, 10) // compression
  ihdr.writeUInt8(0, 11) // filter
  ihdr.writeUInt8(0, 12) // interlace

  // Raw scanlines: each row starts with filter byte 0
  const rowLen = 1 + width * 4
  const raw = Buffer.alloc(rowLen * height)
  for (let y = 0; y < height; y++) {
    const rowStart = y * rowLen
    raw[rowStart] = 0
    for (let x = 0; x < width; x++) {
      const px = rowStart + 1 + x * 4
      raw[px] = rgba[0]
      raw[px + 1] = rgba[1]
      raw[px + 2] = rgba[2]
      raw[px + 3] = rgba[3]
    }
  }

  const compressed = zlib.deflateSync(raw, { level: 9 })

  const ihdrChunk = pngChunk('IHDR', ihdr)
  const idatChunk = pngChunk('IDAT', compressed)
  const iendChunk = pngChunk('IEND', Buffer.alloc(0))

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk])
}

async function main() {
  const root = process.cwd()
  const outDir = path.join(root, 'public')

  // Purple tone similar to your theme
  const purple = [124, 58, 237, 255] // #7C3AED

  const icon192 = makeSolidPng({ width: 192, height: 192, rgba: purple })
  const icon512 = makeSolidPng({ width: 512, height: 512, rgba: purple })

  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'pwa-192x192.png'), icon192)
  await fs.writeFile(path.join(outDir, 'pwa-512x512.png'), icon512)

  console.log('Generated PWA icons in public/: pwa-192x192.png, pwa-512x512.png')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
