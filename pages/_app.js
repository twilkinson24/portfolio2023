import '../faust.config';
import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme-context'
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isBrowserDefaultDark = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (typeof window === "undefined") return null;

  const getDefaultTheme = () => {
    const localStorageTheme = typeof window === "undefined" ? false : localStorage.getItem('theme') ? localStorage.getItem('theme') : false;
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  
  const [theme, setTheme] = useState(getDefaultTheme());

  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FaustProvider pageProps={pageProps}>
        <div className={`theme ${theme}-mode`}>
          <Component {...pageProps} key={router.asPath} />
        </div>
      </FaustProvider>
    </ThemeContext.Provider>

  );
}
