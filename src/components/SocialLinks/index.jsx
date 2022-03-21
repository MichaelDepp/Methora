import React, { useEffect, useState } from 'react';
import {
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import { useTheme } from 'next-themes';
import constants from '../../constants';

const SocialLink = () => {
    const [iconColor, setIconColor] = useState(constants.colors.theme.lightBg);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme === 'light') {
            setIconColor(constants.colors.theme.dark);
        } else {
            setIconColor(constants.colors.theme.lightBg);
        }
    }, [theme]);

    return (
        <div className="flex flex-row justify-between my-8 mx-16 lg:mx-0 lg:mr-32">
            <AiOutlineTwitter size={18} color={iconColor} />
            <AiOutlineGithub size={18} color={iconColor} />
            <AiFillLinkedin size={18} color={iconColor} />
            <AiOutlineDribbble size={18} color={iconColor} />
        </div>
    );
};

export default SocialLink;
