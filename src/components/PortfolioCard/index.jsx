import React, { useState } from 'react';

const PortfolioCard = ({ imageSrc, onClick, title }) => {
    const [isHovered, setHovered] = useState(false);
    return (
        <a
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="absolute grid h-80 w-64 cursor-pointer content-center rounded-lg duration-300 hover:bg-theme-primary/80 lg:h-112 lg:w-80">
                <h3
                    className={`break-all p-4 text-center text-2xl font-bold leading-none text-theme-bg transition-opacity duration-150 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {title}
                </h3>
            </div>
            <img
                className="h-80 w-64 rounded-lg object-cover lg:h-112 lg:w-80"
                src={imageSrc}
                alt={title}
            />
        </a>
    );
};

export default PortfolioCard;
