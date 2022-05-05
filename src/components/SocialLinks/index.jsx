import React from 'react';
import {
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineInstagram,
    AiFillLinkedin
} from 'react-icons/ai';

const SocialLink = () => {
    const iconStyle =
        'cursor-pointer text-theme-dark dark:text-theme-lightBg hover:text-theme-primary lg:hover:text-theme-primary';

    return (
        <div className="my-8 mx-16 flex flex-row justify-between lg:mx-0 lg:mr-32">
            <AiOutlineTwitter
                size={18}
                className={iconStyle}
                onClick={() => window.open('https://twitter.com/NASA')}
            />
            <AiOutlineInstagram
                size={18}
                className={iconStyle}
                onClick={() => window.open('https://instagram.com/nasa')}
            />
            <AiFillLinkedin
                size={18}
                className={iconStyle}
                onClick={() => window.open('https://www.linkedin.com/company/nasa/')}
            />
            <AiOutlineDribbble
                size={18}
                className={iconStyle}
                onClick={() => window.open('https://dribbble.com/tags/nasa')}
            />
        </div>
    );
};

export default SocialLink;
