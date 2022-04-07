import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="shortcut icon" href="./assets/rocket-icon.png" />
                    <link rel="apple-touch-icon" href="./assets/rocket-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="description" content="Methora Theme" />
                </Head>
                <body className="font-display">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
