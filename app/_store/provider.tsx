'use client';

import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}
