import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ImageBlob from 'components/ImageBlob';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import ProgressBar from 'components/ProgressBar';
import ContentWrapper from 'components/ContentWrapper';

const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                transition: { duration: 1, delay: 0.5 },
                opacity: 1
            });
        } else {
            animation.start({
                transition: { duration: 1 },
                opacity: 0
            });
        }
    }, [inView]);

    return (
        <Container id="skills">
            <div className="pt-8">
                <HeaderTitle title={'Skills'} />
            </div>
            <div
                ref={ref}
                className="pb-16 lg:pb-24 grid grid-flow-row gap-8 lg:gap-24 lg:grid-cols-2 lg:grid-rows-1 content-center lg:content-end h-4/5">
                <motion.div
                    animate={animation}
                    className="flex justify-center lg:justify-end lg:items-center">
                    <ImageBlob image={'./assets/memoji-skills.webp'} />
                </motion.div>
                <ContentWrapper style={'w-full my-auto'}>
                    <ProgressBar custom={1} skillName={'Flutter'} percentage={95} />
                    <ProgressBar custom={2} skillName={'React Native'} percentage={90} />
                    <ProgressBar custom={3} skillName={'Machine Learning'} percentage={45} />
                    <ProgressBar custom={4} skillName={'Python'} percentage={85} />
                    <ProgressBar custom={5} skillName={'Ui Design'} percentage={90} />
                </ContentWrapper>
            </div>
        </Container>
    );
};

export default Skills;
