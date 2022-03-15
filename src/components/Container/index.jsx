import React from 'react';

const Container = (props) => (
    <div className="px-8 bg-theme-lightBg dark:bg-theme-bg h-screen w-full">{props.children}</div>
);

export default Container;
