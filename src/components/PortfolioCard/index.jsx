import React, { useState } from 'react';

const PortfolioCard = ({ imageSrc, link, title }) => {
    const [isHovered, setHovered] = useState(false);
    return (
        // Start Portfolio Card Section
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {/* Start Hover Background Section */}
            <div className="absolute grid h-80 w-64 cursor-pointer content-center rounded-lg duration-300 hover:bg-theme-primary/80 lg:h-112 lg:w-80">
                {/* Start Hover Title Section */}
                <p
                    className={`p-4 text-center text-2xl font-bold leading-none text-theme-bg transition-opacity duration-150 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {title}
                </p>
                {/* End Hover Title Section */}
            </div>
            {/* End Hover Background Section */}

            {/* Start Card Image Section */}
            <img
                className="h-80 w-64 rounded-lg object-cover lg:h-112 lg:w-80"
                src={imageSrc}
                alt={title}
            />
            {/* End Card Image Section */}
        </a>
        // End Portfolio Card Section
    );
};

export default PortfolioCard;
