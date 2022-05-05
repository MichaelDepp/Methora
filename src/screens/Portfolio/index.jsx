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
        setDisplayData([...portfolioData.model, ...portfolioData.nature]);
    }, []);

    // Sample Portfolio Data
    const portfolioData = {
        model: [
            {
                title: 'Natalia Kira',
                imageSrc: '/assets/portfolio/natalia-kira.webp',
                link: 'https://images.pexels.com/photos/4843594/pexels-photo-4843594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Елизавета Крючкина',
                imageSrc: '/assets/portfolio/eлизавета-kрючкина.jpeg',
                link: 'https://images.pexels.com/photos/9185072/pexels-photo-9185072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Erica Ogoliva',
                imageSrc: '/assets/portfolio/erica-ogoliva.jpeg',
                link: 'https://images.pexels.com/photos/11919506/pexels-photo-11919506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Ms Mongolia',
                imageSrc: '/assets/portfolio/ms-mongolia.jpeg',
                link: 'https://images.pexels.com/photos/2460227/pexels-photo-2460227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
        ],
        nature: [
            {
                title: 'Bali Field',
                imageSrc: '/assets/portfolio/bali-field.jpeg',
                link: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Vietnam Forest',
                imageSrc: '/assets/portfolio/vietnam-forest.jpeg',
                link: 'https://images.pexels.com/photos/1657972/pexels-photo-1657972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Maldives Beach',
                imageSrc: '/assets/portfolio/maldives-beach.jpeg',
                link: 'https://images.pexels.com/photos/3229454/pexels-photo-3229454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                title: 'Iceland Mountain',
                imageSrc: '/assets/portfolio/iceland-mountain.jpeg',
                link: 'https://images.pexels.com/photos/3837615/pexels-photo-3837615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                setDisplayData([...portfolioData.model, ...portfolioData.nature]);
                break;
            case 'Model':
                setDisplayData(portfolioData.model);
                break;
            case 'Nature':
                setDisplayData(portfolioData.nature);
                break;
            default:
                setDisplayData([portfolioData.model, portfolioData.nature]);
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
                <Chip name={'Model'} selected={activeChip === 'Model'} onClick={onClickChip} />
                <Chip name={'Nature'} selected={activeChip === 'Nature'} onClick={onClickChip} />
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
