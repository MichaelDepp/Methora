import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Hamburger from 'hamburger-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import Drawer from '../Drawer';

const HeaderBar = () => {
    const [isOpen, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const onSwitchTheme = (mode) => setTheme(mode);

    return (
        <>
            <div className="fixed z-50 top-0 w-full flex items-center justify-between flex-wrap">
                <Hamburger color="#F5A8FA" size={20} toggled={isOpen} toggle={setOpen} />
                <div className="px-2">
                    {theme === 'light' ? (
                        <RiMoonFill
                            className="text-theme-primary"
                            size={20}
                            onClick={() => onSwitchTheme('dark')}
                        />
                    ) : (
                        <RiSunFill
                            className="text-theme-primary"
                            size={20}
                            onClick={() => onSwitchTheme('light')}
                        />
                    )}
                </div>
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setOpen}>
                <div>
                    <h1 className="p-4 text-center text-2xl text-theme-primary font-black">
                        About
                    </h1>
                    <h1 className="p-4 text-center text-2xl text-theme-primary font-black">
                        Portfolio
                    </h1>
                    <h1 className="p-4 text-center text-2xl text-theme-primary font-black">
                        Skills
                    </h1>
                    <h1 className="p-4 text-center text-2xl text-theme-primary font-black">
                        Contact
                    </h1>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderBar;
