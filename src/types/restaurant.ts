export interface MenuItem {
  id: string;
  name: string;
  price: number;
  swiggy_price?: number;
  photo: string;
  description?: string; // Added for completeness if needed later, though not in user JSON
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  type: string;
  cuisine_primary: string;
  price_range: string;
  cover_image: string;
  logo: string;
  address: string;
  is_verified: boolean;
  rating?: number;
  is_veg?: boolean;
  created_at?: string;
  external_url?: string;
  description?: string;
  menu?: MenuItem[];
}