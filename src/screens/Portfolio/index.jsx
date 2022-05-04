import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import PortfolioCard from 'components/PortfolioCard';
import Chip from 'components/Chip';

const Portfolio = () => {
    const [activeChip, setActiveChip] = useState('All');
    const [displayData, setDisplayData] = useState([]);
    const { ref, inView } = useInView();
    const animation = useAnimation();

    // Animation Configuration
    useEffect(() => {
        if (inView) {
            animation.start({
                transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
                opacity: 1,
                x: 0
            });
        } else {
            animation.start({
                transition: { duration: 0.5, ease: 'easeOut' },
                opacity: 0,
                x: '-5%'
            });
        }
    }, [inView]);

    useEffect(() => {
        setDisplayData([...portfolioData.flutter, ...portfolioData.uiDesign]);
    }, []);

    // Sample Portfolio Data
    const portfolioData = {
        flutter: [
            {
                title: 'Food delivery app',
                imageSrc: '/assets/portfolio/food-delivery-app.webp',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            },
            {
                title: 'Uber app',
                imageSrc: '/assets/portfolio/uber-app.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            }
        ],
        uiDesign: [
            {
                title: 'Ecom Sneakers',
                imageSrc: '/assets/portfolio/ecom-sneakers.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            },
            {
                title: 'Music Application',
                imageSrc: '/assets/portfolio/music-application.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            }
        ]
    };

    // Function when chip is clicked
    // It will filter the content based on the selected chip
    const onClickChip = (name) => {
        setActiveChip(name);
        animation.start({
            transition: { duration: 1, ease: 'easeIn' },
            opacity: [0, 1],
            x: ['-5%', '0%']
        });
        switch (name) {
            case 'All':
                setDisplayData([...portfolioData.flutter, ...portfolioData.uiDesign]);
                break;
            case 'Flutter':
                setDisplayData(portfolioData.flutter);
                break;
            case 'UI Design':
                setDisplayData(portfolioData.uiDesign);
                break;
            default:
                setDisplayData([portfolioData.flutter, portfolioData.uiDesign]);
        }
    };

    return (
        <Container id="portfolio" fullScreen={false}>
            {/* Start Title Section */}
            <div className="pt-8">
                <HeaderTitle title={'Portfolio'} />
            </div>
            {/* End Title Section */}

            {/* Start Chips Section */}
            <div className="grid grid-flow-col justify-center gap-4 pt-8 lg:pt-12">
                <Chip name={'All'} selected={activeChip === 'All'} onClick={onClickChip} />
                <Chip name={'Flutter'} selected={activeChip === 'Flutter'} onClick={onClickChip} />
                <Chip
                    name={'UI Design'}
                    selected={activeChip === 'UI Design'}
                    onClick={onClickChip}
                />
            </div>
            {/* End Chips Section */}

            {/* Start Portfolio Cards Section */}
            <motion.div
                ref={ref}
                animate={animation}
                className="grid grid-rows-1 justify-items-center gap-4 py-12 lg:grid-cols-3 lg:gap-8 lg:py-16">
                {displayData.map((data, key) => {
                    return <PortfolioCard key={key} {...data} />;
                })}
            </motion.div>
            {/* End Portfolio Cards Section */}
        </Container>
    );
};

export default Portfolio;
