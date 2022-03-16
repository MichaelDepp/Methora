import React from 'react';
import {
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineGithub,
    AiFillLinkedin
} from 'react-icons/ai';

const SocialLink = () => {
    return (
        <div className="flex flex-row justify-around my-8">
            <AiOutlineTwitter size={18} />
            <AiOutlineGithub size={18} />
            <AiFillLinkedin size={18} />
            <AiOutlineDribbble size={18} />
        </div>
    );
};

export default SocialLink;
