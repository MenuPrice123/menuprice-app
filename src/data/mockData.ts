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
        cover_image: "/images/varalakshmi-tiffins.png",
        logo: "/images/varalakshmi-tiffins.png",
        address: "Hyderabad",
        is_verified: true,
        created_at: new Date().toISOString(),
        // @ts-ignore - Adding custom fields for external link
        external_url: "https://varalakshmitiffins.com",
        description: "Varalakshmi Tiffins is a well-established South Indian vegetarian quick-service restaurant (QSR) brand headquartered in Hyderabad, widely recognized for its operational consistency, authentic flavor profile, and high customer throughput. Over the years, it has positioned itself as a go-to breakfast and tiffin destination for both locals and visitors."
    }
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
