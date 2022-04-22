import React from 'react';

const Drawer = ({ children, isOpen, setIsOpen }) => {
    return (
        <main
            className={
                'fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out' +
                (isOpen
                    ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
                    : ' translate-x-full opacity-0 transition-all delay-500  ')
            }>
            {/* Start Drawer Background Layout */}
            <div
                className={
                    ' delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out dark:bg-theme-bg  ' +
                    (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
                }>
                <div className="relative flex h-full w-screen max-w-lg flex-col content-center justify-center space-y-6 overflow-y-scroll pb-10">
                    {children}
                </div>
            </div>
            {/* End Drawer Background Layout */}

            {/* Start Drawer First Background Layout */}
            <div
                className="bg-theme-white/50 h-full w-screen cursor-pointer dark:bg-theme-bg/50"
                onClick={() => {
                    setIsOpen(false);
                }}
            />
            {/* End Drawer First Background Layout */}
        </main>
    );
};

export default Drawer;
