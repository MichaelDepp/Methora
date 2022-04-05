import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Blog from 'screens/Blog';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Skills from 'screens/Skills';
import Testimony from 'screens/Testimony';
import Portfolio from 'screens/Portfolio';
import HeaderBar from 'components/HeaderBar';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const Index = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 2000);
    }, []);

    return (
        <>
            <Head>
                <title>Methora Portfolio Theme - Confetti Themes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!loading ? (
                <Spinner color="bg-theme-primary" />
            ) : (
                <>
                    <Home />
                    <Skills />
                    <Portfolio />
                    <Testimony />
                    <Blog />
                    <Contact />
                    <HeaderBar />
                    {/* <Footer /> */}
                </>
            )}
        </>
    );
};

export default Index;
