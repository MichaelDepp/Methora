import React from 'react';

const ContentWrapper = (props) => {
    return <div className={`max-w-lg mx-auto ${props.style}`}>{props.children}</div>;
};

export default ContentWrapper;
