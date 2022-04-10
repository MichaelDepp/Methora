import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

// Screen imports
import Blog from 'screens/Blog';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Skills from 'screens/Skills';
import Testimony from 'screens/Testimony';
import Portfolio from 'screens/Portfolio';

// Component imports
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');
    const [ref, inView] = useInView({
        // The threshold can be adjusted, this to control the starting point of a viewport
        // You can get more infromation from here https://github.com/thebuilder/react-intersection-observer#api
        threshold: 0.5
    });
    const [ref2, inView2] = useInView({
        threshold: 0.5
    });
    const [ref3, inView3] = useInView({
        threshold: 0.5
    });
    const [ref4, inView4] = useInView({
        threshold: 0.5
    });
    const [ref5, inView5] = useInView({
        threshold: 0.5
    });
    const [ref6, inView6] = useInView({
        threshold: 0.5
    });

    // This loding state can be used if you fetch data or get response from an api
    useEffect(() => {
        // We've added timeout time to 2 seconds
        setTimeout(() => setLoading(false), 2000);
    }, []);

    // The inView hooks is being used to observe which section is being showed in the viewport
    // This to enable the headerBar's active section color changes while user scroll the page
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
            {/*The spinner will be displayed conditionally according to the loading state */}
            {loading ? (
                <Spinner color="bg-theme-primary" />
            ) : (
                <div className="relative">
                    {/*Home Section*/}
                    <div ref={ref}>
                        <Home />
                    </div>

                    {/*Skills Section*/}
                    <div ref={ref2}>
                        <Skills />
                    </div>

                    {/*Portfolio Section*/}
                    <div ref={ref3}>
                        <Portfolio />
                    </div>

                    {/*Testimony Section*/}
                    <div ref={ref4}>
                        <Testimony />
                    </div>

                    {/*Blog Section*/}
                    <div ref={ref5}>
                        <Blog />
                    </div>

                    {/*Contact Section*/}
                    <div ref={ref6}>
                        <Contact />
                    </div>

                    {/*Header Section*/}
                    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

                    {/*Footer Section*/}
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Index;
