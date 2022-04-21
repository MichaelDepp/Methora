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

    const skillsData = [
        {
            name: 'Flutter',
            percentage: 95
        },
        {
            name: 'React Native',
            percentage: 90
        },
        {
            name: 'Machine Learning',
            percentage: 45
        },
        {
            name: 'Python',
            percentage: 85
        },
        {
            name: 'Ui Design',
            percentage: 90
        }
    ];

    return (
        <Container id="skills">
            <div className="pt-8">
                <HeaderTitle title={'Skills'} />
            </div>
            <div
                ref={ref}
                className="grid h-4/5 grid-flow-row content-center gap-8 xxs:pb-0 xs:pb-16 lg:grid-cols-2 lg:grid-rows-1 lg:content-end lg:gap-24 lg:pb-24">
                <motion.div
                    animate={animation}
                    className="flex justify-center lg:items-center lg:justify-end">
                    <ImageBlob image={'./assets/memoji-skills.webp'} />
                </motion.div>
                <ContentWrapper style={'w-full px-2 lg:px-0 my-auto'}>
                    {skillsData.map((data, key) => (
                        <ProgressBar key={key} custom={key} {...data} />
                    ))}
                </ContentWrapper>
            </div>
        </Container>
    );
};

export default Skills;
