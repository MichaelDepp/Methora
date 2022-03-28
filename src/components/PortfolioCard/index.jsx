import React, { useState, useEffect } from 'react';

const PortfolioCard = ({ imageSrc, onClick }) => {
    const [isHovered, setHovered] = useState(false);
    return (
        <a
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="absolute hover:bg-theme-primary/50 w-64 duration-300 h-80 lg:w-80 lg:h-112 rounded-lg grid content-end">
                <h3
                    className={`font-bold text-5xl text-theme-bg leading-none break-all p-4 transition-opacity duration-150 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {'Facial Recognition Mobile Application'}
                </h3>
            </div>
            <img
                className="object-cover w-64 h-80 lg:w-80 lg:h-112 rounded-lg"
                src={imageSrc}
                alt="Portfolio"
            />
        </a>
    );
};

export default PortfolioCard;
