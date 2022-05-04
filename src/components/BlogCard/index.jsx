import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';

const BlogCard = ({ title, description, imageSrc, link, onClick }) => {
    const [isHovered, setHovered] = useState(false);
    const animation = useAnimation();

    if (!title) {
        return null;
    }

    useEffect(() => {
        if (isHovered) {
            animation.start((i) => ({
                scale: 1.2,
                transition: { duration: 0.5, ease: 'easeIn' }
            }));
        } else {
            animation.start({
                scale: 1,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        }
    }, [isHovered]);

    const bgColorConfig = 'hover:bg-theme-primary dark:hover:bg-theme-primary';
    const textHoverConfig = 'text-theme-bg dark:text-theme-bg';

    return (
        <div
            className={`z-50 h-96 w-64 cursor-pointer overflow-hidden rounded-lg bg-gray-200 text-theme-bg shadow-sm
                transition-colors duration-700 ease-in-out dark:bg-theme-darkLight dark:text-theme-lightBg lg:h-112 lg:w-80 ${bgColorConfig}
            `}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="w-full overflow-hidden">
                <motion.div animate={animation} className="h-64 w-full">
                    <Image
                        src={imageSrc}
                        alt={imageSrc}
                        layout="responsive"
                        height={80}
                        width={60}
                        objectFit="cover"
                    />
                </motion.div>
            </div>
            <div className={`px-5 py-3 leading-none lg:py-5 ${isHovered && textHoverConfig}`}>
                <h1 className="mb-2 text-lg font-bold line-clamp-2 lg:mb-4 lg:text-xl">{title}</h1>
                <p className="mb-2 text-sm line-clamp-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
