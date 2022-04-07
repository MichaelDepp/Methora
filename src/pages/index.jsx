import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

import Blog from 'screens/Blog';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Skills from 'screens/Skills';
import Testimony from 'screens/Testimony';
import Portfolio from 'screens/Portfolio';
import HeaderBar from 'components/HeaderBar';
import Spinner from 'components/Spinner';

const Index = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [ref, inView] = useInView({
        threshold: 0.8
    });
    const [ref2, inView2] = useInView({
        threshold: 0.8
    });
    const [ref3, inView3] = useInView({
        threshold: 0.8
    });
    const [ref4, inView4] = useInView({
        threshold: 0.8
    });
    const [ref5, inView5] = useInView({
        threshold: 0.8
    });
    const [ref6, inView6] = useInView({
        threshold: 0.8
    });

    useEffect(() => {
        setTimeout(() => setLoading(true), 2000);
    }, []);

    useEffect(() => {
        if (inView) {
            setCurrentPage('home');
        }
        if (inView2) {
            setCurrentPage('skills');
        }
        if (inView3) {
            setCurrentPage('portfolio');
        }
        if (inView4) {
            setCurrentPage('testimony');
        }
        if (inView5) {
            setCurrentPage('blog');
        }
        if (inView6) {
            setCurrentPage('contact');
        }
    }, [inView, inView2, inView3, inView4, inView5, inView6]);

    return (
        <>
            <Head>
                <title>Methora Portfolio Theme - Confetti Themes</title>
            </Head>
            {!loading ? (
                <Spinner color="bg-theme-primary" />
            ) : (
                <>
                    <div ref={ref}>
                        <Home />
                    </div>
                    <div ref={ref2}>
                        <Skills />
                    </div>
                    <div ref={ref3}>
                        <Portfolio />
                    </div>
                    <div ref={ref4}>
                        <Testimony />
                    </div>
                    <div ref={ref5}>
                        <Blog />
                    </div>
                    <div ref={ref6}>
                        <Contact />
                    </div>
                    <HeaderBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>
            )}
        </>
    );
};

export default Index;
