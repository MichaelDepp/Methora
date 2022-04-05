import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import constants from '../../constants';

import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import TestimonyCard from 'components/TestimonyCard';

const Testimony = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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

    const testimonyData = [
        {
            name: 'Emily Aviv',
            position: 'Mobile Engineer, Tesla',
            image: 'https://images.pexels.com/photos/4038261/pexels-photo-4038261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            testimony:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales ut nunc sed laoreet.'
        },
        {
            name: 'John Doe',
            position: 'Data Scientist, Boston',
            image: 'https://images.pexels.com/photos/5935279/pexels-photo-5935279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            testimony:
                'Cras in mattis urna. Vestibulum  Sed maximus turpis vel massa tristique, quis sagittis lorem.'
        },
        {
            name: 'Deepika Singh',
            position: 'Solution Architect, Space X',
            image: 'https://images.pexels.com/photos/11555708/pexels-photo-11555708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            testimony:
                'Aenean condimentum semper dictum. convallis dui vel lorem vestibulum commodo. Quisque rutrum, risus.'
        },
        {
            name: 'Peter Hill',
            position: 'QA Analyst, Pepsi',
            image: 'https://images.pexels.com/photos/8117906/pexels-photo-8117906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            testimony:
                'In a volutpat dolor. Sed eget enim varius, volutpat nunc ut, hendrerit est. Vivamus vel erat auctor.'
        },
        {
            name: 'Nur Nazirah',
            position: 'Senior PO, Google',
            image: 'https://images.pexels.com/photos/8350511/pexels-photo-8350511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            testimony:
                'Sed sit amet vulputate sem. In vel fringilla ipsum. Aenean sit amet tellus et felis blandit suscipit.'
        }
    ];

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
            return <div className={`${pagingColor} w-2 h-2 rounded-full mt-4`} />;
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
            <div className="pt-8">
                <HeaderTitle title={'Testimony'} />
            </div>
            <motion.div ref={ref} animate={animation} className="py-16 lg:py-20">
                <Slider {...settings}>
                    {testimonyData.map((data, key) => (
                        <TestimonyCard key={key} {...data} />
                    ))}
                </Slider>
            </motion.div>
        </Container>
    );
};

export default Testimony;
