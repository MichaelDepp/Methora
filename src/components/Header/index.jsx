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
    const { theme, setTheme } = useTheme();
    const animation = useAnimation();

    useEffect(() => {
        if (props.currentPage === 'home') {
            animation.start({
                y: 0,
                transition: { duration: 0.5, ease: 'easeIn' }
            });
        } else if (props.currentPage !== 'home' && barHover) {
            animation.start({
                y: 0,
                transition: { duration: 0.5, ease: 'easeIn' }
            });
        } else {
            animation.start({
                y: -100,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        }
    }, [barHover, props.currentPage]);

    const onSwitchTheme = (mode) => setTheme(mode);

    const closeBar = () => setOpen(false);

    const pages = ['home', 'skills', 'portfolio', 'testimony', 'blog', 'contact'];

    return (
        <>
            <div
                onMouseEnter={() => setBarHover(true)}
                onMouseLeave={() => setBarHover(false)}
                className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between lg:bg-theme-lightBg/90 dark:lg:bg-theme-bg/90">
                <div className="lg:invisible">
                    <Hamburger
                        color={constants.colors.theme.primary}
                        size={20}
                        toggled={isOpen}
                        toggle={setOpen}
                    />
                </div>
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
                                    className={`${colorCofig} cursor-pointer text-lg font-bold hover:text-theme-primary dark:hover:text-theme-primary`}>
                                    {upperFirst(page)}
                                </p>
                            </Link>
                        );
                    })}
                </motion.div>
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
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setOpen}>
                <div className="grid grid-flow-row gap-4">
                    {pages.map((page, key) => (
                        <LinkPage key={key} page={upperFirst(page)} onClick={closeBar} />
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Header;
