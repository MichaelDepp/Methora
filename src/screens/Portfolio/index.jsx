import React from 'react';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';
import PortfolioCard from '../../components/PortfolioCard';
import PortfolioChip from '../../components/PortfolioChip';

const Portfolio = () => {
    return (
        <Container id="portfolio" fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Portfolio'} />
            </div>
            <div className="pt-20">
                <PortfolioChip />
            </div>
            <div className="py-12 justify-items-center grid grid-rows-1 gap-4 lg:grid-cols-3 lg:gap-8 lg">
                <PortfolioCard
                    imageSrc={
                        'https://cdn.dribbble.com/userupload/1808226/file/original-43fd0dc66317c79c4a827d41e2478a72.png'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://cdn.dribbble.com/users/33073/screenshots/11863204/media/3f76f45cf65a050a4a952f98d5b31c5f.png'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://cdn.dribbble.com/users/232800/screenshots/14385267/media/6748fd123e1025602b28fc1ed9174fd5.png'
                    }
                    onClick={() => console.log('cool')}
                />
                <PortfolioCard
                    imageSrc={
                        'https://cdn.dribbble.com/users/452635/screenshots/14276201/media/9a9dfb97b7525e2539eee882bd949a14.png'
                    }
                    onClick={() => console.log('cool')}
                />
            </div>
        </Container>
    );
};

export default Portfolio;
