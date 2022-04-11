import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';

const Modal = (props) => {
    const animation = useAnimation();

    useEffect(() => {
        if (props.isOpen) {
            animation.start({
                scale: 1,
                transition: { duration: 0.5, ease: 'easeIn' }
            });
        } else {
            animation.start({
                scale: 0,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        }
    }, [props.isOpen]);

    const iconColorConfig =
        'text-theme-bg dark:text-theme-lightBg hover:text-theme-primary hover:dark:text-theme-primary';

    return (
        <motion.div
            animate={animation}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-auto bg-theme-lightBg dark:bg-theme-bg">
            <>
                <RiCloseCircleLine
                    className={`absolute right-2 top-2 cursor-pointer ${iconColorConfig}`}
                    size={22}
                    onClick={() => props.setIsOpen(false)}
                />
                {props.children}
            </>
        </motion.div>
    );
};

export default Modal;
