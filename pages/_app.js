import React from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import '../styles/icofont.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-accessible-accordion/dist/fancy-example.css';
// Global Styles
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/globals.css';

import Head from 'next/head';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Codemify - Learn to Code, Get Hired, and Thrive in Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
      <ScrollToTop />
    </>
  );
}

export default MyApp;
