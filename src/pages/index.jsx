import React from 'react';
import Head from 'next/head';
import Home from '../screens/Home';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

const Index = () => (
    <>
        <Head>
            <title>Methora Portfolio Theme - Confetti Themes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
        <HeaderBar />
        <Footer />
    </>
);

export default Index;