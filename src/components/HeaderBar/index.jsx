import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Hamburger from 'hamburger-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import Drawer from '../Drawer';
import constants from '../../constants';

import LinkPage from '../LinkPage';

const HeaderBar = () => {
    const [isOpen, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const onSwitchTheme = (mode) => setTheme(mode);

    const closeBar = () => setOpen(false);

    return (
        <>
            <div className="fixed z-50 top-0 w-full flex items-center justify-between flex-wrap">
                <Hamburger
                    color={constants.colors.theme.primary}
                    size={20}
                    toggled={isOpen}
                    toggle={setOpen}
                />
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
                    <LinkPage page={'Home'} onClick={closeBar} />
                    <LinkPage page={'Skills'} onClick={closeBar} />
                    <LinkPage page={'Portfolio'} onClick={closeBar} />
                    <LinkPage page={'Blog'} onClick={closeBar} />
                    <LinkPage page={'Contact'} onClick={closeBar} />
                </div>
            </Drawer>
        </>
    );
};

export default HeaderBar;
