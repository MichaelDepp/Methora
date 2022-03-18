import React from 'react';

const PortfolioCard = ({ imageSrc, onClick }) => {
    return (
        <a onClick={onClick}>
            <div className="absolute hover:bg-theme-primary/50 w-64 duration-300 h-80 lg:w-80 lg:h-112 rounded-lg" />
            <img
                className="object-cover w-64 h-80 lg:w-80 lg:h-112 rounded-lg"
                src={imageSrc}
                alt="Portfolio"
            />
        </a>
    );
};

export default PortfolioCard;
