import React from 'react';
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Methora Theme</title>
            </Head>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
