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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg/70 transition-opacity">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute h-auto max-w-6xl overflow-auto bg-green-500 p-8 transition-opacity">
                        <>
                            <RiCloseCircleLine
                                className={`absolute top-1 right-2 cursor-pointer ${iconColorConfig}`}
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
