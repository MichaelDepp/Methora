import React from 'react';

const Container = ({ children, fullScreen, id }) => {
    return (
        <div
            className="flex content-center justify-center bg-theme-lightBg px-8 dark:bg-theme-bg lg:px-0"
            id={id}>
            <div className={`max-w-screen-xl ${fullScreen ? 'h-screen' : ''} w-full`}>
                {children}
            </div>
        </div>
    );
};

Container.defaultProps = {
    fullScreen: true
};

export default Container;
