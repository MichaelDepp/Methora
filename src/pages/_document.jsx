import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            {/* Start Head Section */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="./assets/rocket-icon.png" />
                <link rel="apple-touch-icon" href="./assets/rocket-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="description" content="Methora Theme" />
            </Head>
            {/* End Head Section */}

            {/* Start Body Section */}
            <body className="font-display">
                <Main />
                <NextScript />
            </body>
            {/* End Body Section */}
        </Html>
    );
};

export default Document;
