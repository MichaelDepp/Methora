import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import TestimonyCard from 'components/TestimonyCard';
import constants from '../../constants';

const Testimony = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { ref, inView } = useInView();
    const animation = useAnimation();

    // Animation Configuration
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

    // Sample Testimony Data
    const testimonyData = [
        {
            name: 'Emily Aviv',
            position: 'Chief Photographer, Sony',
            image: '/assets/testimony/emily-aviv.webp',
            testimony:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales ut nunc sed laoreet.'
        },
        {
            name: 'John Doe',
            position: 'Costume Designer, Gucci',
            image: '/assets/testimony/john-doe.webp',
            testimony:
                'Cras in mattis urna. Vestibulum  Sed maximus turpis vel massa tristique, quis sagittis lorem.'
        },
        {
            name: 'Deepika Singh',
            position: 'Model, Shaine',
            image: '/assets/testimony/deepika-singh.jpeg',
            testimony:
                'Aenean condimentum semper dictum. convallis dui vel lorem vestibulum commodo. Quisque rutrum, risus.'
        },
        {
            name: 'Peter Hill',
            position: 'Editor, Pepsi',
            image: '/assets/testimony/peter-hill.webp',
            testimony:
                'In a volutpat dolor. Sed eget enim varius, volutpat nunc ut, hendrerit est. Vivamus vel erat auctor.'
        },
        {
            name: 'Nur Nazirah',
            position: 'Senior PO, Traveloka',
            image: '/assets/testimony/nur-nazirah.webp',
            testimony:
                'Sed sit amet vulputate sem. In vel fringilla ipsum. Aenean sit amet tellus et felis blandit suscipit.'
        }
    ];

    if (!testimonyData) {
        return null;
    }

    const ArrowLeft = (props) => (
        <AiFillLeftCircle
            className={props.className}
            onClick={props.onClick}
            color={constants.colors.theme.primary}
        />
    );

    const ArrowRight = (props) => (
        <AiFillRightCircle
            className={props.className}
            onClick={props.onClick}
            color={constants.colors.theme.primary}
        />
    );

    // Slick Slider Configurations
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        dots: true,
        afterChange: setCurrentSlide,
        centerPadding: '0px',
        slidesToShow: 3,
        speed: 500,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        customPaging: (index) => {
            const pagingColor = index === currentSlide ? 'bg-theme-primary' : 'bg-theme-primary/40';
            return <div className={`${pagingColor} mt-4 h-2 w-2 rounded-full`} />;
        },
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
            {/* Start Title Section */}
            <div className="pt-8">
                <HeaderTitle title={'Testimony'} />
            </div>
            {/* End Title Section */}

            {/* Start Testimonies Section */}
            <motion.div ref={ref} animate={animation} className="py-16">
                <Slider {...settings}>
                    {testimonyData.map((data, key) => (
                        <TestimonyCard key={key} {...data} />
                    ))}
                </Slider>
            </motion.div>
            {/* End Testimonies Section */}
        </Container>
    );
};

export default Testimony;
