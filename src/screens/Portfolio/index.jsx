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

    const portfolioData = {
        flutter: [
            {
                title: 'Food delivery app',
                imageSrc:
                    'https://cdn.dribbble.com/userupload/1808226/file/original-43fd0dc66317c79c4a827d41e2478a72.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            },
            {
                title: 'Uber app',
                imageSrc:
                    'https://cdn.dribbble.com/users/33073/screenshots/11863204/media/3f76f45cf65a050a4a952f98d5b31c5f.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            }
        ],
        uiDesign: [
            {
                title: 'Ecom Sneakers',
                imageSrc:
                    'https://cdn.dribbble.com/users/232800/screenshots/14385267/media/6748fd123e1025602b28fc1ed9174fd5.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            },
            {
                title: 'Music Application',
                imageSrc:
                    'https://cdn.dribbble.com/users/452635/screenshots/14276201/media/9a9dfb97b7525e2539eee882bd949a14.png',
                link: 'https://www.behance.net/gallery/115708047/Delivery-App?tracking_source=search_projects%7Cmobile%20app'
            }
        ]
    };

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
            <div className="pt-8">
                <HeaderTitle title={'Portfolio'} />
            </div>
            <div className="grid grid-flow-col justify-center gap-4 pt-8 lg:pt-12">
                <Chip name={'All'} selected={activeChip === 'All'} onClick={onClickChip} />
                <Chip name={'Flutter'} selected={activeChip === 'Flutter'} onClick={onClickChip} />
                <Chip
                    name={'UI Design'}
                    selected={activeChip === 'UI Design'}
                    onClick={onClickChip}
                />
            </div>
            <motion.div
                ref={ref}
                animate={animation}
                className="grid grid-rows-1 justify-items-center gap-4 py-12 lg:grid-cols-3 lg:gap-8 lg:py-16">
                {displayData.map((data, key) => {
                    return <PortfolioCard key={key} {...data} />;
                })}
            </motion.div>
        </Container>
    );
};

export default Portfolio;
