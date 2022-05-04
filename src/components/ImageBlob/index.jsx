import React from 'react';
import Image from 'next/image';

const ImageBlob = (props) => {
    return (
        // Start Background Blob Section
        <div className="h-56 w-56 animate-blob rounded-full bg-theme-primary shadow-2xl xs:h-64 xs:w-64 lg:h-96 lg:w-96">
            {/* Start Image Section */}
            <Image
                src={props.image}
                alt={props.image}
                layout="fill"
                objectFit="contain"
                className="h-56 w-56 rounded-full xs:h-64 xs:w-64 lg:h-96 lg:w-96"
            />
            {/* End Image Section */}
        </div>
        // End Background Blob Section
    );
};

export default ImageBlob;
