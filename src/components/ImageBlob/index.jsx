import React from 'react';

const ImageBlob = (props) => {
    return (
        <div className="h-64 w-64 animate-blob rounded-full bg-theme-primary shadow-2xl lg:h-96 lg:w-96">
            <img
                className="h-64 w-64 rounded-full object-contain lg:h-96 lg:w-96"
                src={props.image}
                // src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
            />
        </div>
    );
};

export default ImageBlob;
