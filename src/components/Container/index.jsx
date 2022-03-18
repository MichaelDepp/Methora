import React from 'react';

const Container = ({ children, fullScreen }) => {
    return (
        <div
            className={`px-8 bg-theme-lightBg dark:bg-theme-bg ${
                fullScreen ? 'h-screen' : ''
            } w-full`}>
            {children}
        </div>
    );
};

Container.defaultProps = {
    fullScreen: true
};

export default Container;
