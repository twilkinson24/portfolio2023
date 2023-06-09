import '../faust.config';
import React, { useState, useEffect } from 'react';
import Script from "next/script"
import { ThemeContext } from '../contexts/theme-context'
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '../styles/global.scss';
import * as gtag from "../components/gtag"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

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
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FaustProvider pageProps={pageProps}>
          <div className={`theme ${theme}-mode`}>
            <Component {...pageProps} key={router.asPath} />
          </div>
        </FaustProvider>
      </ThemeContext.Provider>
    </>
  );
}
