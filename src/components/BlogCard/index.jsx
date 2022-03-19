import React from 'react';

const BlogCard = () => {
    const bgColorConfig = 'hover:bg-theme-primary dark:hover:bg-theme-primary';
    const titleColorConfig = 'hover:text-theme-primary dark:hover:text-theme-primary';
    return (
        <div
            className={`overflow-hidden text-theme-bg dark:text-theme-lightBg bg-gray-200 dark:bg-theme-dark transition-shadow duration-300 rounded-lg shadow-sm w-64 h-96 lg:w-80 lg:h-112 ${bgColorConfig}`}>
            <img
                src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="px-5 py-3 leading-none">
                <a
                    href="/"
                    aria-label="Category"
                    title="Simple is better"
                    className="line-clamp-2 text-lg lg:text-xl font-bold mb-2">
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
