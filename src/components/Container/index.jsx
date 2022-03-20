import React from 'react';

const Container = ({ children, fullScreen, id }) => {
    return (
        <div className="px-8 lg:px-0 flex justify-center bg-theme-lightBg dark:bg-theme-bg" id={id}>
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
