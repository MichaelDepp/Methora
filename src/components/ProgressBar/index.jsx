import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ custom, skillName, percentage }) => {
    const { ref, inView } = useInView();
    const progressBarAnimation = useAnimation();
    const opacityAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            progressBarAnimation.start((i) => ({
                opacity: 1,
                width: `${percentage}%`,
                transition: { delay: i * 0.5, ease: 'easeIn' }
            }));
            opacityAnimation.start((i) => ({
                transition: { delay: i * 0.3 },
                opacity: 1
            }));
        } else {
            progressBarAnimation.start({
                opacity: 0,
                width: '0%',
                transition: { delay: 0.5, ease: 'easeOut' }
            });
            opacityAnimation.start({
                transition: { delay: 0.3 },
                opacity: 0
            });
        }
    }, [inView]);

    if (!skillName || !percentage) {
        return null;
    }
    return (
        <div ref={ref} className="pt-4 lg:pt-8 w-full">
            <motion.p
                custom={custom}
                animate={opacityAnimation}
                className="font-regular text-base lg:text-lg">
                {skillName}
            </motion.p>
            <motion.div
                custom={custom}
                animate={opacityAnimation}
                className="w-full bg-theme-bg/20 dark:bg-theme-lightBg/20 rounded-lg h-1 overflow-hidden">
                <motion.div
                    custom={custom}
                    animate={progressBarAnimation}
                    className="bg-theme-primary rounded-lg h-1"
                    style={{ width: `${percentage}%` }}></motion.div>
            </motion.div>
        </div>
    );
};

export default ProgressBar;
