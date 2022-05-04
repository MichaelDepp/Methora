import React, { useState } from 'react';
import Image from 'next/image';

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
            <div className="absolute z-10 grid h-80 w-64 cursor-pointer content-center rounded-lg duration-300 hover:bg-theme-primary/80 lg:h-100 lg:w-80">
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
            <div className="z-0 h-80 w-64 lg:h-100 lg:w-80">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="responsive"
                    width={64}
                    height={80}
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            {/* End Card Image Section */}
        </a>
        // End Portfolio Card Section
    );
};

export default PortfolioCard;
