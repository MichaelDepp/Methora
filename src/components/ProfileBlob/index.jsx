import React from 'react';

const ProfileBlob = (props) => {
    return (
        <div className="bg-theme-primary rounded-full">
            <img
                className="object-contain w-64 h-64"
                src={props.image}
                // src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
            />
        </div>
    );
};

export default ProfileBlob;
