import { Restaurant } from "@/types/restaurant";

export interface MenuItem {
    id: string;
    restaurant_id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    is_veg: boolean;
}

export const MOCK_RESTAURANTS: Restaurant[] = [
    {
        id: "r1",
        name: "Varalakshmi Tiffins",
        slug: "varalakshmi-tiffins",
        type: "South Indian",
        cuisine_primary: "Tiffins",
        price_range: "₹₹",
        cover_image: "/images/varalakshmi-logo.jpg",
        logo: "/images/varalakshmi-logo.jpg",
        address: "Kukatpally",
        is_verified: true,
        created_at: new Date().toISOString(),
        // Check local navigation first
        // external_url: "https://varalakshmitiffins.com",
        description: "Varalakshmi Tiffins is a well-established South Indian vegetarian quick-service restaurant (QSR) brand headquartered in Hyderabad.",
        rating: 4.5,
        is_veg: true,
        is_trending: true,
        menu: [
            { id: "vt-idly", name: "Idly (3 pcs)", price: 60, swiggy_price: 115, photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80" },
            { id: "vt-ghee-karam-idly", name: "Ghee Karam Idly (3 pcs)", price: 90, swiggy_price: 149, photo: "/images/ghee-karam-idly.jpg" },
            { id: "vt-mysore-bhajji", name: "Mysore Bhajji (4 pcs)", price: 60, swiggy_price: 115, photo: "/images/mysore-bhajji.jpg" },
            { id: "vt-plain-dosa", name: "Plain Dosa", price: 60, swiggy_price: 49, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-soft-dosa", name: "Soft Dosa", price: 60, swiggy_price: 49, photo: "/images/soft-dosa.jpg" },
            { id: "vt-masala-dosa", name: "Masala Dosa", price: 75, swiggy_price: 129, photo: "/images/masala-dosa.jpg" },
            { id: "vt-ghee-dosa", name: "Ghee Dosa", price: 85, swiggy_price: 135, photo: "/images/ghee-dosa.jpg" },
            { id: "vt-karam-ghee-dosa", name: "Karam Ghee Dosa", price: 90, swiggy_price: 149, photo: "/images/karam-ghee-dosa.jpg" },
            { id: "vt-karam-ghee-masala-dosa", name: "Karam Ghee Masala Dosa", price: 105, swiggy_price: 149, photo: "/images/karam-ghee-masala-dosa.jpg" },
            { id: "vt-paneer-dosa", name: "Paneer Dosa", price: 105, swiggy_price: 179, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-butter-dosa", name: "Butter Dosa", price: 85, swiggy_price: 135, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-uthappam", name: "Uthappam", price: 80, swiggy_price: 130, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-upma-dosa", name: "Upma Dosa", price: 75, swiggy_price: 119, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-onion-dosa", name: "Onion Dosa", price: 75, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-ragi-dosa", name: "Ragi Dosa", price: 65, swiggy_price: 115, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-ragi-ghee-dosa", name: "Ragi Ghee Dosa", price: 65, swiggy_price: 139, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-pesara-dosa", name: "Pesara Dosa", price: 65, swiggy_price: 115, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-upma-pesara-dosa", name: "Upma Pesara Dosa", price: 80, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-onion-pesara-dosa", name: "Onion Pesara Dosa", price: 80, swiggy_price: 135, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-beetroot-dosa", name: "Beetroot Dosa", price: 65, swiggy_price: 79, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-beetroot-ghee-dosa", name: "Beetroot Ghee Dosa", price: 65, swiggy_price: 139, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-palak-dosa", name: "Palak Dosa", price: 65, swiggy_price: 79, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-palak-ghee-dosa", name: "Palak Ghee Dosa", price: 65, swiggy_price: 139, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80" },
            { id: "vt-vada", name: "Vada", price: 75, photo: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80" }
        ]
    },
    {
        id: "r2",
        name: "Burger King",
        slug: "burger-king",
        type: "Fast Food",
        cuisine_primary: "Burger",
        price_range: "₹₹",
        cover_image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
        address: "Hyderabad",
        is_verified: true,
        created_at: new Date().toISOString(),
        external_url: "https://burgerking.in",
        description: "Burger King is an American multinational chain of hamburger fast food restaurants.",
        rating: 4.2,
        is_veg: false,
        is_trending: true
    },
    {
        id: "r3",
        name: "Paradise Biryani",
        slug: "paradise-biryani",
        type: "Biryani",
        cuisine_primary: "Biryani",
        price_range: "₹₹₹",
        cover_image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
        address: "Secunderabad",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "World famous Hyderabadi Biryani.",
        rating: 4.6,
        is_veg: false,
        is_trending: true
    },
    {
        id: "r4",
        name: "Chutneys",
        slug: "chutneys",
        type: "South Indian",
        cuisine_primary: "South Indian",
        price_range: "₹₹",
        cover_image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
        address: "Jubilee Hills",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Famous for their wide variety of chutneys and traditional South Indian meals.",
        rating: 4.4,
        is_veg: true,
        is_trending: true
    },

];

export const MOCK_MENU_ITEMS: MenuItem[] = [
    // Varalakshmi Tiffins Items
    {
        id: "m1",
        restaurant_id: "r1",
        name: "Idli",
        description: "Soft and fluffy steamed rice cakes served with sambar and chutneys.",
        price: 50,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    },
    {
        id: "m2",
        restaurant_id: "r1",
        name: "Dosa",
        description: "Crispy rice crepe served with sambar and coconut chutney.",
        price: 60,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    },
    {
        id: "m3",
        restaurant_id: "r1",
        name: "Vada",
        description: "Crispy lentil fritters served with sambar and chutneys.",
        price: 45,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    },
    {
        id: "m4",
        restaurant_id: "r1",
        name: "Upma",
        description: "Savory semolina porridge with vegetables and spices.",
        price: 55,
        image: "https://images.unsplash.com/photo-1589301773859-cb1ebb7a5850?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    },
    {
        id: "m5",
        restaurant_id: "r1",
        name: "Pongal",
        description: "Comforting rice and lentil dish seasoned with ghee and spices.",
        price: 65,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    },
    {
        id: "m6",
        restaurant_id: "r1",
        name: "Masala Dosa",
        description: "Crispy dosa filled with spiced potato filling.",
        price: 75,
        image: "https://images.unsplash.com/photo-1694672571904-0670c5e68595?w=800&q=80",
        category: "Tiffins",
        is_veg: true
    }
];
