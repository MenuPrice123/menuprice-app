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
    },
    {
        id: "r2",
        name: "Burger King",
        slug: "burger-king",
        type: "Restaurant",
        cuisine_primary: "Fast Food",
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
        is_trending: true,
        menu: [
            { id: "bk-1", name: "Whopper", price: 299, photo: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80", description: "Flame grilled beef patty", category: "Burgers" }
        ]
    },
    {
        id: "r3",
        name: "Paradise Biryani",
        slug: "paradise-biryani",
        type: "Restaurant",
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
        is_trending: true,
        has_admin_credentials: true,
        menu: [
            { id: "pb-1", name: "Hyderabadi Chicken Biryani", price: 350, photo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", description: "World famous authentic Hyderabadi dum biryani", category: "Biryani" },
            { id: "pb-2", name: "Mutton Biryani", price: 450, photo: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80", description: "Tender mutton pieces cooked with basmati rice", category: "Biryani" },
            { id: "pb-3", name: "Veg Biryani", price: 280, photo: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80", description: "Fresh vegetables cooked with aromatic spices", category: "Biryani" }
        ]
    },
    {
        id: "r4",
        name: "Kshatriya Grand",
        slug: "kshatriya-grand",
        type: "Restaurant",
        cuisine_primary: "South Indian",
        price_range: "₹₹",
        cover_image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",
        address: "Kukatpally, Hyderabad",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Authentic Godavari Ruchulu. Specializing in Chittimuthyala Pulavs, Spicy Non-Veg Curries and Biryanis.",
        rating: 4.5,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            // Starters
            { id: "kg-1", name: "Chilli Paneer", price: 190, photo: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80", description: "Spicy cottage cheese toss", category: "Starters" },
            { id: "kg-2", name: "Chicken 65", price: 220, photo: "https://images.unsplash.com/photo-1610057099431-d8f57d4574eb?w=800&q=80", description: "Spicy deep fried chicken chunks", category: "Starters" },
            { id: "kg-3", name: "Golden Fried Prawns", price: 300, photo: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80", description: "Crispy fried prawns", category: "Starters" },

            // Biryanis & Pulaos
            { id: "kg-4", name: "Special Chicken Fry Piece Biriyani (Boneless)", price: 350, photo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", description: "Signature biryani with boneless chicken fry", category: "Biryani" },
            { id: "kg-5", name: "Prawn Biriyani", price: 400, photo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", description: "Flavorful prawn biryani", category: "Biryani" },
            { id: "kg-6", name: "Chittimuthyala Chicken Fry Piece Pulao", price: 300, photo: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80", description: "Traditional pulav made with seeraga samba rice", category: "Pulao" },
            { id: "kg-7", name: "Gongura Kodi Pulao", price: 330, photo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80", description: "Spicy chicken pulao with tangy gongura leaves", category: "Pulao" },
            { id: "kg-8", name: "Mutton Biryani (Bagara)", price: 420, photo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80", description: "Bagara rice served with mutton curry", category: "Biryani" },

            // Curries
            { id: "kg-9", name: "Chapala Pulusu", price: 180, photo: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80", description: "Tangy and spicy fish curry (Full)", category: "Curries" },
            { id: "kg-10", name: "Mutton Curry", price: 320, photo: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=800&q=80", description: "Traditional mutton curry (Full)", category: "Curries" },

            // Family Packs
            { id: "kg-11", name: "Chicken Fry Piece Pulao Family Pack", price: 800, photo: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80", description: "Serves 3-4 people", category: "Family Packs" },

            // Desserts
            { id: "kg-12", name: "Junnu", price: 100, photo: "https://images.unsplash.com/photo-1517244683847-7454b94e417e?w=800&q=80", description: "Traditional Kharvas sweet", category: "Desserts" }
        ]
    },

    // CLOUD KITCHENS
    {
        id: "ck_1",
        name: "Burger Lab",
        slug: "burger-lab",
        type: "Cloud Kitchen",
        cuisine_primary: "Experimental Burgers",
        price_range: "$$",
        cover_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        address: "Virtual Kitchen Hub A",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Experimental burgers with unique toppings like truffle jam and charcoal buns.",
        rating: 4.3,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "bl-1", name: "Truffle Smash", price: 350, photo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", description: "Smash patty with truffle mayo", category: "Burgers" }
        ]
    },
    {
        id: "ck_2",
        name: "Green Bowl Co.",
        slug: "green-bowl-co",
        type: "Cloud Kitchen",
        cuisine_primary: "Healthy",
        price_range: "$$",
        cover_image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        address: "Virtual Kitchen Hub B",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Health-focused kitchen serving grain bowls, salads, and cold-pressed juices.",
        rating: 4.5,
        is_veg: true,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "gbc-1", name: "Quinoa Power Bowl", price: 299, photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", description: "Quinoa, kale, avocado, and chickpeas", category: "Bowls" }
        ]
    },
    {
        id: "ck_3",
        name: "Late Night Noodle Bar",
        slug: "late-night-noodle-bar",
        type: "Cloud Kitchen",
        cuisine_primary: "Asian",
        price_range: "$",
        cover_image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        address: "Night Market Zone",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Specialized in ramen and stir-fry, operating primarily between 8:00 PM and 3:00 AM.",
        rating: 4.4,
        is_veg: false,
        is_trending: false,
        has_admin_credentials: false,
        menu: [
            { id: "lnn-1", name: "Spicy Miso Ramen", price: 350, photo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80", description: "Rich broth with spicy miso paste", category: "Ramen" }
        ]
    },
    {
        id: "ck_4",
        name: "The Taco Hatch",
        slug: "the-taco-hatch",
        type: "Cloud Kitchen",
        cuisine_primary: "Mexican",
        price_range: "$",
        cover_image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        address: "Speed Kitchens",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "A high-speed kitchen focusing on street-style tacos with 15-minute delivery radiuses.",
        rating: 4.6,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "tth-1", name: "Carne Asada Tacos", price: 250, photo: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", description: "Grilled steak tacos with salsa verde", category: "Tacos" }
        ]
    },

    // CATERING
    {
        id: "cat_1",
        name: "Grand Feast Events",
        slug: "grand-feast-events",
        type: "Catering",
        cuisine_primary: "Multi-Cuisine",
        price_range: "$$$",
        cover_image: "https://images.unsplash.com/photo-1519225468359-69632974a1d2?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1519225468359-69632974a1d2?w=800&q=80",
        address: "Event Plaza",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Full-service catering for weddings (50–500 guests). Specializes in buffet and plated service.",
        rating: 4.9,
        is_veg: false,
        is_trending: false,
        has_admin_credentials: false,
        menu: [
            { id: "cat-1", name: "Wedding Buffet Package", price: 1500, photo: "https://images.unsplash.com/photo-1519225468359-69632974a1d2?w=800&q=80", description: "Per plate price starting at", category: "Packages" }
        ]
    },
    {
        id: "cat_2",
        name: "Corporate Bites",
        slug: "corporate-bites",
        type: "Catering",
        cuisine_primary: "Corporate",
        price_range: "$$",
        cover_image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        address: "Business District",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Specialized in office lunches, seminars, and 'brown bag' individual corporate meals.",
        rating: 4.5,
        is_veg: false,
        is_trending: false,
        has_admin_credentials: false,
        menu: [
            { id: "cat-2", name: "Executive Box Lunch", price: 350, photo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", description: "Sandwich, salad, and cookie", category: "Box Meals" }
        ]
    },
    {
        id: "cat_3",
        name: "Spitfire BBQ Catering",
        slug: "spitfire-bbq-catering",
        type: "Catering",
        cuisine_primary: "BBQ",
        price_range: "$$$",
        cover_image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
        address: "Suburbs",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "On-site live grilling for backyard parties and community festivals.",
        rating: 4.7,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "cat-3", name: "Whole Hog Roast", price: 5000, photo: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80", description: "Slow roasted pork", category: "Live Station" }
        ]
    },
    {
        id: "cat_4",
        name: "Petit Four Patisserie",
        slug: "petit-four-patisserie",
        type: "Catering",
        cuisine_primary: "Desserts",
        price_range: "$$$",
        cover_image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&q=80",
        address: "French Quarter",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Dessert-only catering featuring macaron towers and mini-pastry displays.",
        rating: 4.8,
        is_veg: true,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "cat-4", name: "Macaron Tower", price: 2000, photo: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&q=80", description: "50 assorted french macarons", category: "Desserts" }
        ]
    },

    // HOME FOODS / MICRO-KITCHENS
    {
        id: "hf_1",
        name: "Aunty May’s Dumplings",
        slug: "aunty-mays-dumplings",
        type: "Home Foods",
        cuisine_primary: "Chinese",
        price_range: "$",
        cover_image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
        address: "Residential Block C",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Handmade pork and chive dumplings, sold frozen or steamed in batches of 20.",
        rating: 4.9,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "hf-1", name: "Pork Dumplings (20pcs)", price: 400, photo: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80", description: "Handmade with secret family recipe", category: "Frozen" }
        ]
    },
    {
        id: "hf_2",
        name: "The Sourdough Studio",
        slug: "the-sourdough-studio",
        type: "Home Foods",
        cuisine_primary: "Bakery",
        price_range: "$$",
        cover_image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        address: "The Cottages",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "A home-based bakery producing only 12 loaves of artisanal bread every Saturday morning.",
        rating: 5.0,
        is_veg: true,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "hf-2", name: "Classic Sourdough", price: 250, photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80", description: "Crusty artisan loaf", category: "Bread" }
        ]
    },
    {
        id: "hf_3",
        name: "Heritage Tiffin",
        slug: "heritage-tiffin",
        type: "Home Foods",
        cuisine_primary: "Indian",
        price_range: "$",
        cover_image: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?w=800&q=80",
        address: "Old City",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "A weekly subscription service providing home-cooked regional meals (Dal, Rice, Sabzi).",
        rating: 4.7,
        is_veg: true,
        is_trending: false,
        has_admin_credentials: false,
        menu: [
            { id: "hf-3", name: "Weekly Tiffin Plan", price: 1500, photo: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?w=800&q=80", description: "Lunch delivered M-F", category: "Subscription" }
        ]
    },
    {
        id: "hf_4",
        name: "Mamma’s Pasta Jar",
        slug: "mammas-pasta-jar",
        type: "Home Foods",
        cuisine_primary: "Italian",
        price_range: "$$",
        cover_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
        logo: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
        address: "Little Italy",
        is_verified: true,
        created_at: new Date().toISOString(),
        description: "Fresh, hand-rolled pasta and slow-cooked sauces sold in glass jars for finishing at home.",
        rating: 4.8,
        is_veg: false,
        is_trending: true,
        has_admin_credentials: false,
        menu: [
            { id: "hf-4", name: "Basil Pesto Jar", price: 300, photo: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80", description: "200g Fresh Pesto", category: "Sauces" }
        ]
    }
];
