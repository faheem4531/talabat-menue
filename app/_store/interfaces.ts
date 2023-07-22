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
  data: any;
  loading: boolean;
  error: string | null;
}

export interface itemState {
  data: any;
  loading: boolean;
  error: string | null;
}
export interface FavoriteState {
  data: string[]
}

export interface test {
  id: string;
  name: string;
}
