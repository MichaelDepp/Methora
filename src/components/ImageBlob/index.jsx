import React from 'react';

const ImageBlob = (props) => {
    return (
        <div className="h-56 w-56 animate-blob rounded-full bg-theme-primary shadow-2xl xs:h-64 xs:w-64 lg:h-96 lg:w-96">
            <img
                className="h-56 w-56 rounded-full object-contain xs:h-64 xs:w-64 lg:h-96 lg:w-96"
                src={props.image}
                alt="user image"
            />
        </div>
    );
};

export default ImageBlob;
