import React from 'react';

const ProfileBlob = (props) => {
    return (
        <div className="bg-theme-primary w-64 h-64 lg:w-96 lg:h-96 rounded-full animate-blob shadow-2xl">
            <img
                className="object-contain w-64 h-64 lg:w-96 lg:h-96 rounded-full"
                src={props.image}
                // src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
            />
        </div>
    );
};

export default ProfileBlob;
