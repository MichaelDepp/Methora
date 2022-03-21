import React from 'react';
import {
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import { useTheme } from 'next-themes';
import constants from '../../constants';

const SocialLink = () => {
    const { theme } = useTheme();
    const colorConfig =
        theme === 'dark' ? constants.colors.theme.lightBg : constants.colors.theme.dark;

    return (
        <div className="flex flex-row justify-between my-8 mx-16 lg:mx-0 lg:mr-32">
            <AiOutlineTwitter size={18} color={colorConfig} />
            <AiOutlineGithub size={18} color={colorConfig} />
            <AiFillLinkedin size={18} color={colorConfig} />
            <AiOutlineDribbble size={18} color={colorConfig} />
        </div>
    );
};

export default SocialLink;
