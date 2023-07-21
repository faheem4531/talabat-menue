export interface RootState {
  test: TestState;
  menuCatageory: MenuCatageoryState
}

export interface TestState {
  test: test;
  loading: boolean;
  error: string | null;
}
export interface MenuCatageoryState {
  data: any;
  catagories: any[]
  loading: boolean;
  error: string | null;
}

export interface test {
  id: string;
  name: string;
}
