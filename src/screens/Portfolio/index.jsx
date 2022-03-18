import React from 'react';
import ProfileBlob from 'components/ProfileBlob';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';
import PortfolioCard from '../../components/PortfolioCard';

const Portfolio = () => {
    return (
        <Container fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Portfolio'} />
            </div>
            <div className="pt-28 justify-items-center grid grid-rows-1 gap-4">
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
