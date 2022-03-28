import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

const BlogCard = () => {
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
            className={`overflow-hidden text-theme-bg dark:text-theme-lightBg bg-gray-200 dark:bg-theme-dark transition-colors duration-700 ease-in-out rounded-lg shadow-sm w-64 h-96 lg:w-80 lg:h-112 ${bgColorConfig}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="overflow-hidden w-full">
                <motion.img
                    animate={animation}
                    src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-64"
                    alt=""
                />
            </div>
            <div className={`px-5 py-3 lg:py-5 leading-none ${isHovered && textHoverConfig}`}>
                <a
                    href="/"
                    aria-label="Category"
                    title="Simple is better"
                    className="line-clamp-2 text-lg lg:text-xl font-bold mb-2 lg:mb-4">
                    How to deploy a next application to vercel
                </a>
                <p className="line-clamp-4 mb-2 text-sm">
                    Starting from Nx 11, your Next.js application should already be ready for
                    deployment to Vercel. your Next.js application should already be ready for
                    deployment to Vercel.
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
