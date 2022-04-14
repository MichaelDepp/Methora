import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';

const Modal = (props) => {
    const iconColorConfig =
        'text-theme-lightBg hover:text-theme-primary hover:dark:text-theme-primary';

    const closeModal = () => props.setIsOpen(false);

    return (
        <AnimatePresence>
            {props.isOpen && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-theme-bg/70 transition-opacity">
                    <motion.div className="absolute overflow-auto p-8 transition-opacity">
                        <>
                            <RiCloseCircleLine
                                className={`absolute right-2 top-2 cursor-pointer ${iconColorConfig}`}
                                size={22}
                                onClick={closeModal}
                            />
                            {props.children}
                        </>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
