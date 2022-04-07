import React from 'react';

const HeaderTitle = ({ title }) => {
    return (
        <div className="relative overflow-hidden text-center">
            <h1 className="absolute right-0 left-0 top-2.5 z-10 text-center text-3xl font-bold text-theme-primary lg:top-3 lg:text-5xl">
                {title}
            </h1>
            <span className="text-6xl font-bold leading-none text-theme-bg/5 dark:text-theme-lightBg/5 lg:text-8xl">
                {title}
            </span>
        </div>
    );
};

export default HeaderTitle;
