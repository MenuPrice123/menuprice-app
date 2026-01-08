import os
from PIL import Image, ImageDraw

# Define the file list
file_list = [
    "idly.jpg", "ghee_karam_idly.jpg", "mysore_bhajji.jpg", "plain_dosa.jpg",
    "masala_dosa.jpg", "ghee_dosa.jpg", "karam_ghee_dosa.jpg", "karam_ghee_masala_dosa.jpg",
    "ragi_dosa.jpg", "uthappam.jpg", "soft_dosa.jpg", "butter_dosa.jpg",
    "paneer_dosa.jpg", "pesara_dosa.jpg", "upma_pesara_dosa.jpg", "onion_pesara_dosa.jpg",
    "vada.jpg", "beetroot_dosa.jpg", "palak_dosa.jpg", "onion_dosa.jpg", "upma_dosa.jpg"
]

# Output directory in the public folder
output_dir = r"c:\Users\yagne\menuprice-app\public\images"

# Create directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for file_name in file_list:
    # Create a blank image (placeholder)
    # 600x400 is a standard aspect ratio for food cards
    img = Image.new('RGB', (600, 400), color=(230, 230, 230))
    d = ImageDraw.Draw(img)
    
    # Add the filename text to the image so the user knows which is which
    # Using default font and basic positioning
    d.text((20, 190), file_name, fill=(50, 50, 50))
    
    # Save image 
    img.save(os.path.join(output_dir, file_name))

print(f"Images created in {output_dir}")
