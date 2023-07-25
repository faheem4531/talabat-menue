'use client';

import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import i18n from '../../i18n';

export function Providers({ children }: { children: React.ReactNode }) {

  const { i18n: i18nLocale } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18nLocale.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', i18nLocale.language);
  }, [i18nLocale.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
      <ToastContainer autoClose={2000} theme="colored" />
    </I18nextProvider>

  );
}
