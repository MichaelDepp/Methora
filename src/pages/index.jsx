import React from 'react';
import Head from 'next/head';
import Blog from 'screens/Blog';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Skills from 'screens/Skills';
import Testimony from 'screens/Testimony';
import Portfolio from 'screens/Portfolio';
import HeaderBar from 'components/HeaderBar';
import Footer from 'components/Footer';

const Index = () => (
    <>
        <Head>
            <title>Methora Portfolio Theme - Confetti Themes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
        <Skills />
        <Portfolio />
        <Testimony />
        <Blog />
        <Contact />
        <HeaderBar />
        {/* <Footer /> */}
    </>
);

export default Index;
