import React, { useState } from 'react';

const PortfolioCard = ({ imageSrc, onClick, title }) => {
    const [isHovered, setHovered] = useState(false);
    return (
        <a
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="absolute hover:bg-theme-primary/80 w-64 duration-300 h-80 lg:w-80 lg:h-112 rounded-lg grid content-center cursor-pointer">
                <h3
                    className={`font-bold text-2xl text-theme-bg text-center leading-none break-all p-4 transition-opacity duration-150 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {title}
                </h3>
            </div>
            <img
                className="object-cover w-64 h-80 lg:w-80 lg:h-112 rounded-lg"
                src={imageSrc}
                alt={title}
            />
        </a>
    );
};

export default PortfolioCard;
