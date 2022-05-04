import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Hamburger from 'hamburger-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import upperFirst from 'lodash/upperFirst';
import { useAnimation, motion } from 'framer-motion';

import Drawer from '../Drawer';
import constants from '../../constants';
import LinkPage from '../LinkPage';

const Header = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [barHover, setBarHover] = useState(false);
    const [barVisible, setBarVisible] = useState(false);
    const { theme, setTheme } = useTheme();
    const animation = useAnimation();

    useEffect(() => {
        if (props.currentPage === 'home') {
            setBarVisible(true);
            animation.start({
                y: 0,
                transition: { duration: 0.5, ease: 'easeIn' }
            });
        } else if (props.currentPage !== 'home' && barHover) {
            setBarVisible(true);
            animation.start({
                y: 0,
                transition: { duration: 0.5, ease: 'easeIn' }
            });
        } else {
            setBarVisible(false);
            animation.start({
                y: -100,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        }
    }, [barHover, props.currentPage]);

    const onSwitchTheme = (mode) => setTheme(mode);

    const closeBar = () => setOpen(false);

    const pages = ['home', 'skills', 'portfolio', 'testimony', 'blog', 'contact'];

    const barOverlayConfig = barVisible
        ? 'transition-colors duration-500 ease-in lg:bg-theme-lightBg/90 dark:lg:bg-theme-bg/90'
        : 'transition-colors duration-100 ease-out bg-none';

    return (
        <>
            {/* Start Header Bar Section */}
            <div
                onMouseEnter={() => setBarHover(true)}
                onMouseLeave={() => setBarHover(false)}
                className={`fixed top-0 z-40 flex w-full flex-wrap items-center justify-between ${barOverlayConfig}`}>
                {/* Start Hamburger Section */}
                <div className="lg:invisible">
                    <Hamburger
                        color={constants.colors.theme.primary}
                        size={20}
                        toggled={isOpen}
                        toggle={setOpen}
                        aria-label="close-open"
                    />
                </div>
                {/* End Hamburger Section */}

                {/* Start Header Page Link Section */}
                <motion.div animate={animation} className="hidden grid-flow-col gap-16 lg:grid">
                    {pages.map((page, key) => {
                        const colorCofig =
                            props.currentPage === page
                                ? 'text-theme-primary'
                                : 'text-theme-bg dark:text-theme-lightBg';
                        return (
                            <Link key={key} href={`#${page.toLowerCase()}`}>
                                <p
                                    onClick={() => props.setCurrentPage(page)}
                                    className={`${colorCofig} cursor-pointer text-lg font-bold
                                    hover:text-theme-primary dark:hover:text-theme-primary`}>
                                    {upperFirst(page)}
                                </p>
                            </Link>
                        );
                    })}
                </motion.div>
                {/* End Header Page Link Section */}

                {/* Start Dark / Light Mode Toggle Section */}
                <div className="p-3">
                    {theme === 'light' ? (
                        <RiMoonFill
                            className="text-theme-primary"
                            size={22}
                            onClick={() => onSwitchTheme('dark')}
                        />
                    ) : (
                        <RiSunFill
                            className="text-theme-primary"
                            size={22}
                            onClick={() => onSwitchTheme('light')}
                        />
                    )}
                </div>
                {/* Start Dark / Light Mode Toggle Section */}
            </div>
            {/* End Header Bar Section */}

            {/* Start Drawer Section */}
            <Drawer isOpen={isOpen} setIsOpen={setOpen}>
                <div className="grid grid-flow-row gap-4">
                    {pages.map((page, key) => (
                        <LinkPage key={key} page={upperFirst(page)} onClick={closeBar} />
                    ))}
                </div>
            </Drawer>
            {/* End Drawer Section */}
        </>
    );
};

export default Header;
