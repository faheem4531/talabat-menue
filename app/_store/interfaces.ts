export interface RootState {
  order: OrderState;
  menuCatageory: MenuCatageoryState,
  cart: CartState,
  favorites: FavoriteState;
  item: itemState;
  restaurant: RestaurantState;
  customer: CustomerState;
  language: LanguageState;
  address: AddressState;
}
export interface MenuCatageoryState {
  data: any;
  catagories: any[]
  loading: boolean;
  error: string | null;
}

export interface CartState {
  cart: any,
  items: any[],
  discount: string,
  userMustAuth: boolean,
  loading: boolean
}

export interface itemState {
  data: any;
  loading: boolean;
  error: string | null;
}
export interface FavoriteState {
  data: string[]
}
export interface RestaurantState {
  data: any[];
  loading: boolean;
  error: string | null;
  selectedRestaurant: any
}

export interface CustomerState {
  data: any;
  loading: boolean;
  error: string | null;
}
export interface LanguageState {
  name: string
}

export interface OrderState {
  order: any
  loading: boolean
}

export interface AddressState {
  lng: number;
  lat: number;
  description: string
}