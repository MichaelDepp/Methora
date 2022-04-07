import React from 'react';
import {
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineGithub,
    AiFillLinkedin
} from 'react-icons/ai';

const SocialLink = () => {
    const iconStyle =
        'cursor-pointer text-theme-dark dark:text-theme-lightBg hover:text-theme-primary lg:hover:text-theme-primary';

    const onClickIcon = (link) => window.open(link);

    return (
        <div className="my-8 mx-16 flex flex-row justify-between lg:mx-0 lg:mr-32">
            <AiOutlineTwitter
                size={18}
                className={iconStyle}
                onClick={() => onClickIcon('https://twitter.com/NASA')}
            />
            <AiOutlineGithub
                size={18}
                className={iconStyle}
                onClick={() => onClickIcon('https://twitter.com/NASA')}
            />
            <AiFillLinkedin
                size={18}
                className={iconStyle}
                onClick={() => onClickIcon('https://twitter.com/NASA')}
            />
            <AiOutlineDribbble
                size={18}
                className={iconStyle}
                onClick={() => onClickIcon('https://twitter.com/NASA')}
            />
        </div>
    );
};

export default SocialLink;
