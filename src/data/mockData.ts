import { Restaurant } from "@/types/restaurant";

export const MOCK_RESTAURANTS: Restaurant[] = [
    {
        id: "r1",
        name: "Varalakshmi Tiffins",
        slug: "varalakshmi-tiffins",
        type: "Restaurant",
        cuisine_primary: "South Indian",
        price_range: "₹₹",
        cover_image: "/varalakshmi-hero-v2.png",
        logo: "/varalakshmi-logo.png",
        address: "Kukatpally, Hyderabad",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Experience authentic South Indian vegetarian cuisine at Varalakshmi Tiffins - a beloved QSR brand from Hyderabad serving traditional tiffins with a modern touch.",
        rating: 4.5,
        is_veg: true,
        is_trending: true,
        menu: [
            { id: "vt-idly", name: "Idly (3 pcs)", price: 60, swiggy_price: 115, photo: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80", description: "Soft steamed rice cakes", category: "Idly" },
            { id: "vt-ghee-karam-idly", name: "Ghee Karam Idly (3 pcs)", price: 90, swiggy_price: 149, photo: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80", description: "Idlis topped with spicy ghee", category: "Idly" },
            { id: "vt-mysore-bhajji", name: "Mysore Bhajji (4 pcs)", price: 60, swiggy_price: 115, photo: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", description: "Crispy lentil fritters", category: "Bajji" },
            { id: "vt-plain-dosa", name: "Plain Dosa", price: 60, swiggy_price: 49, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Thin crispy rice crepe", category: "Dosa" },
            { id: "vt-soft-dosa", name: "Soft Dosa", price: 60, swiggy_price: 49, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Soft fluffy dosa", category: "Dosa" },
            { id: "vt-ghee-dosa", name: "Ghee Dosa", price: 85, swiggy_price: 135, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Dosa roasted in pure ghee", category: "Dosa" },
            { id: "vt-onion-dosa", name: "Onion Dosa", price: 75, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80", description: "Dosa topped with onions", category: "Dosa" },
            { id: "vt-masala-dosa", name: "Masala Dosa", price: 75, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1694672571904-0670c5e68595?w=800&q=80", description: "Dosa with spiced potato filling", category: "Dosa" },
            { id: "vt-upma", name: "Upma", price: 50, swiggy_price: 99, photo: "https://images.unsplash.com/photo-1549487922-b53051d95759?w=800&q=80", description: "Savory semolina porridge", category: "Specials" },
            { id: "vt-poori", name: "Poori (2 pcs)", price: 70, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", description: "Fried bread with potato curry", category: "Specials" },
            { id: "vt-rava-dosa", name: "Rava Dosa", price: 75, swiggy_price: 129, photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", description: "Crispy semolina crepe", category: "Rava Dosa" },
            { id: "vt-onion-rava", name: "Onion Rava Dosa", price: 85, swiggy_price: 145, photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", description: "Rava dosa with onions", category: "Rava Dosa" },
            { id: "vt-vada", name: "Vada (2 pcs)", price: 75, photo: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", description: "Crispy lentil donuts", category: "Vada" }
        ]
    }
];
