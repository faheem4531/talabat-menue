export interface RootState {
  menuCatageory: MenuCatageoryState,
  cart: CartState,
  favorites: FavoriteState;
  item: itemState
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
