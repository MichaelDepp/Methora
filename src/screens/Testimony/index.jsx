import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import TestimonyCard from 'components/TestimonyCard';

const Testimony = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
                opacity: 1
            });
        } else {
            animation.start({
                transition: { duration: 0.5, ease: 'easeOut' },
                opacity: 0
            });
        }
    }, [inView]);

    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container id="testimony" fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Testimony'} />
            </div>
            <motion.div ref={ref} animate={animation} className="py-20">
                <Slider {...settings}>
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                </Slider>
            </motion.div>
        </Container>
    );
};

export default Testimony;
