export interface RootState {
  menuCatageory: MenuCatageoryState
  cart: CartState
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

export interface test {
  id: string;
  name: string;
}
