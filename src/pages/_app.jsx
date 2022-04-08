import React from 'react';
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';

// Include the CSS for react-slick slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        // ThemeProvider will be used for dark mode light mode configurations
        // It also stores the user's prefered mode in local storage
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
