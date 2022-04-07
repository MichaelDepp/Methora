import React from 'react';
import { motion } from 'framer-motion';

const Spinner = (props) => {
    const cubeStyle = `w-4 h-4 ${props.color}`;

    const scaleConfig = {
        scale: [1, 0, 1, 1]
    };

    const cubeTransitionConfig = { repeat: Infinity, ease: 'easeInOut', duration: 1.3 };

    return (
        <div className="absolute inset-0 m-auto grid h-12 w-12 grid-cols-3 grid-rows-3">
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.2,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.3,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.4,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.1,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.2,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.3,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.1,
                    ...cubeTransitionConfig
                }}></motion.div>
            <motion.div
                className={cubeStyle}
                animate={scaleConfig}
                transition={{
                    delay: 0.2,
                    ...cubeTransitionConfig
                }}></motion.div>
        </div>
    );
};

export default Spinner;
