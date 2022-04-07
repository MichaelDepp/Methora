import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

const BlogCard = ({ title, description, imageSrc }) => {
    const [isHovered, setHovered] = useState(false);
    const animation = useAnimation();

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
            className={`h-96 w-64 overflow-hidden rounded-lg bg-gray-200 text-theme-bg shadow-sm transition-colors duration-700 ease-in-out dark:bg-theme-darkLight dark:text-theme-lightBg lg:h-112 lg:w-80 ${bgColorConfig}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="w-full overflow-hidden">
                <motion.img
                    animate={animation}
                    src={imageSrc}
                    className="h-64 w-full object-cover"
                    alt={title}
                />
            </div>
            <div className={`px-5 py-3 leading-none lg:py-5 ${isHovered && textHoverConfig}`}>
                <a
                    href="/"
                    aria-label="Category"
                    title="Simple is better"
                    className="mb-2 text-lg font-bold line-clamp-2 lg:mb-4 lg:text-xl">
                    {title}
                </a>
                <p className="mb-2 text-sm line-clamp-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
