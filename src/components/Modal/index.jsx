import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';

const Modal = (props) => {
    const iconColorConfig =
        'text-theme-lightBg hover:text-theme-primary hover:dark:text-theme-primary';

    return (
        <AnimatePresence>
            {props.isOpen && (
                // Start Modal Background Section
                <div
                    onClick={() => props.closeModal()}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg/70 transition-opacity">
                    {/* Start Modal Content Section */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute h-auto max-w-6xl p-8 transition-opacity sm:h-4/5">
                        <>
                            {/* Start Close Button Section */}
                            <RiCloseCircleLine
                                className={`absolute top-1 right-2 cursor-pointer ${iconColorConfig}`}
                                size={22}
                                onClick={() => props.closeModal()}
                            />
                            {/* End Close Button Section */}
                            {props.children}
                        </>
                    </motion.div>
                    {/* End Modal Content Section */}
                </div>
                // End Modal Background Section
            )}
        </AnimatePresence>
    );
};

export default Modal;
