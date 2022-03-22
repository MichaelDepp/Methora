import React from 'react';

const HeaderTitle = ({ title }) => {
    return (
        <div className="relative text-center">
            <h1 className="absolute right-0 left-0 top-2.5 lg:top-3 font-bold text-3xl lg:text-5xl text-theme-primary text-center z-10">
                {title}
            </h1>
            <span className="text-6xl lg:text-8xl font-bold leading-none text-theme-bg/5 dark:text-theme-lightBg/5">
                {title}
            </span>
        </div>
    );
};

export default HeaderTitle;
