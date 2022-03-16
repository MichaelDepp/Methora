import React from 'react';

const HeaderTitle = () => {
    return (
        <div className="relative">
            <h1 className="absolute right-0 left-0 top-2.5 font-bold text-3xl text-theme-primary text-center z-10">
                Skills
            </h1>
            <span className="absolute inset-0 text-6xl font-bold leading-none text-center text-theme-secondary">
                Skills
            </span>
        </div>
    );
};

export default HeaderTitle;
