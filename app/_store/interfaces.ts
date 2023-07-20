export interface RootState {
  test: TestState;
}

export interface TestState {
  test: test;
  loading: boolean;
  error: string | null;
}

export interface test {
  id: string;
  name: string;
}
