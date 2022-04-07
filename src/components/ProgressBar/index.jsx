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
                transition: { delay: i * 0.5, duration: 0.6, ease: 'easeInOut' }
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
        <div ref={ref} className="w-full pt-4 lg:pt-8">
            <motion.p
                custom={custom}
                animate={opacityAnimation}
                className="font-regular text-base lg:text-lg">
                {skillName}
            </motion.p>
            <motion.div
                custom={custom}
                animate={opacityAnimation}
                className="h-1 w-full overflow-hidden rounded-lg bg-theme-bg/20 dark:bg-theme-lightBg/20">
                <motion.div
                    custom={custom}
                    animate={progressBarAnimation}
                    className="h-1 rounded-lg bg-theme-primary"
                    style={{ width: `${percentage}%` }}></motion.div>
            </motion.div>
        </div>
    );
};

export default ProgressBar;
