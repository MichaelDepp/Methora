import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogCard from 'components/BlogCard';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';

const Blog = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
                opacity: 1,
                x: 0
            });
        } else {
            animation.start({
                transition: { duration: 0.5, ease: 'easeOut' },
                opacity: 0,
                x: '-5%'
            });
        }
    }, [inView]);

    return (
        <Container id="blog" fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Blog'} />
            </div>
            <motion.div
                ref={ref}
                animate={animation}
                className="py-8 lg:py-16 justify-items-center grid grid-rows-1 gap-8 lg:grid-cols-3 lg:gap-16">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </motion.div>
        </Container>
    );
};

export default Blog;
