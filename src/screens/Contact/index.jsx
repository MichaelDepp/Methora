import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import ImageBlob from 'components/ImageBlob';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.4
    });

    const animation = useAnimation();
    const formAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                transition: { duration: 1, delay: 0.5 },
                opacity: 1
            });
            formAnimation.start({
                transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
                opacity: 1,
                x: 0
            });
        } else {
            animation.start({
                transition: { duration: 1 },
                opacity: 0
            });
            formAnimation.start({
                transition: { duration: 0.5, ease: 'easeOut' },
                opacity: 0,
                x: '-5%'
            });
        }
    }, [inView]);
    return (
        <Container id="contact">
            <div className="pt-8">
                <HeaderTitle title={'Contact'} />
            </div>
            <div
                ref={ref}
                className="pt-12 lg:pt-72  justify-items-center grid grid-flow-row lg:grid-cols-2 lg:grid-rows-1">
                <motion.div animate={animation} className="flex justify-center">
                    <ImageBlob image={'./assets/memoji-contact.webp'} />
                </motion.div>
                <motion.div
                    animate={formAnimation}
                    className="text-center lg:text-left lg:row-end-1 lg:my-auto">
                    <h3 className="text-theme-primary text-xl lg:text-3xl font-bold pt-8 lg:pt-0">{`Let's Talk`}</h3>
                    <p className="text-theme-bg dark:text-theme-lightBg text-sm lg:text-base pt-2 leading-4 max-w-md">
                        {
                            'To request a quote or want to meet up for coffee, contact us directly or fill out the form and I will get back to you promptly.'
                        }
                    </p>
                    <div className="pt-4">
                        <ContactForm />
                    </div>
                </motion.div>
            </div>
        </Container>
    );
};

export default Contact;
