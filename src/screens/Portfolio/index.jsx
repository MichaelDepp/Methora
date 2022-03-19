import React from 'react';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';
import PortfolioCard from '../../components/PortfolioCard';
import PortfolioChip from '../../components/PortfolioChip';

const Portfolio = (props) => {
    return (
        <Container id={props.id} fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Portfolio'} />
            </div>
            <div className="pt-20">
                <PortfolioChip />
            </div>
            <div className="py-12 justify-items-center grid grid-rows-1 gap-4">
                <PortfolioCard
                    imageSrc={
                        'https://filmfare.wwmindia.com/content/2021/apr/thalaajith11617710652.jpg'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://filmfare.wwmindia.com/content/2021/apr/thalaajith11617710652.jpg'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://filmfare.wwmindia.com/content/2021/apr/thalaajith11617710652.jpg'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://filmfare.wwmindia.com/content/2021/apr/thalaajith11617710652.jpg'
                    }
                    onClick={() => console.log('cool')}
                />
            </div>
        </Container>
    );
};

export default Portfolio;
