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
        name: "Pizza Paradise",
        slug: "pizza-paradise",
        type: "Italian",
        cuisine_primary: "Pizza",
        price_range: "₹₹₹",
        cover_image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1595854341472-1c9d27564c52?w=800&q=80",
        address: "123 Cheese Avenue, Foodie Town",
        is_verified: true,
        created_at: new Date().toISOString()
    },
    {
        id: "r2",
        name: "Burger Joint",
        slug: "burger-joint",
        type: "American",
        cuisine_primary: "Burgers",
        price_range: "₹₹",
        cover_image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        address: "456 Patty Lane, Flavor City",
        is_verified: true,
        created_at: new Date().toISOString()
    },
    {
        id: "r3",
        name: "Sushi Spot",
        slug: "sushi-spot",
        type: "Japanese",
        cuisine_primary: "Sushi",
        price_range: "₹₹₹₹",
        cover_image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        address: "789 Wasabi Way, Zen Garden",
        is_verified: false,
        created_at: new Date().toISOString()
    }
];

export const MOCK_MENU_ITEMS: MenuItem[] = [
    // Pizza Paradise Items
    {
        id: "m1",
        restaurant_id: "r1",
        name: "Margherita Pizza",
        description: "Classic tomato sauce, mozzarella cheese, and fresh basil.",
        price: 399,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        category: "Pizza",
        is_veg: true,
    },
    {
        id: "m2",
        restaurant_id: "r1",
        name: "Pepperoni Feast",
        description: "Spicy pepperoni, extra cheese, and our signature sauce.",
        price: 499,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
        category: "Pizza",
        is_veg: false,
    },
    {
        id: "m3",
        restaurant_id: "r1",
        name: "Garlic Bread",
        description: "Toasted french bread topped with garlic butter and herbs.",
        price: 149,
        image: "https://images.unsplash.com/photo-1573140247632-f84660f67627?w=800&q=80",
        category: "Sides",
        is_veg: true,
    },
    // Burger Joint Items
    {
        id: "m4",
        restaurant_id: "r2",
        name: "Classic Cheeseburger",
        description: "Juicy patty, cheddar cheese, lettuce, tomato, and house sauce.",
        price: 249,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        category: "Burgers",
        is_veg: false,
    },
    {
        id: "m5",
        restaurant_id: "r2",
        name: "Veggie Supreme",
        description: "Crispy veggie patty with fresh garden vegetables.",
        price: 199,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        category: "Burgers",
        is_veg: true,
    },
    // Sushi Spot Items
    {
        id: "m6",
        restaurant_id: "r3",
        name: "California Roll",
        description: "Crab, avocado, and cucumber wrapped in seaweed and rice.",
        price: 599,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        category: "Sushi",
        is_veg: false,
    },
    {
        id: "m7",
        restaurant_id: "r3",
        name: "Salmon Nigiri",
        description: "Fresh salmon slice over pressed vinegared rice.",
        price: 699,
        image: "https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=800&q=80",
        category: "Sushi",
        is_veg: false,
    },
];
