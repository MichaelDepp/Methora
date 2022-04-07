import React from 'react';

const ContentWrapper = (props) => {
    return <div className={`mx-auto max-w-lg ${props.style}`}>{props.children}</div>;
};

export default ContentWrapper;
