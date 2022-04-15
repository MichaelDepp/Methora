import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogCard from 'components/BlogCard';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import Modal from 'components/Modal';

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
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

    const blogData = [
        {
            title: 'How many programming languages do you regularly switch between?',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc:
                'https://images.pexels.com/photos/1181288/pexels-photo-1181288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: 'How to Be a 10x Software Engineer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc:
                'https://images.pexels.com/photos/5496463/pexels-photo-5496463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: '💪Become a Front-end Master using these awesome tools 🖱',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc:
                'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: '4 Core things to always do when cleaning your data for predictive models.',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc:
                'https://images.pexels.com/photos/5952738/pexels-photo-5952738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        }
    ];

    const onClickBlog = (data) => {
        setModalImage(data.imageSrc);
        setIsOpen(true);
    };

    return (
        <Container id="blog" fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Blog'} />
            </div>
            <motion.div
                ref={ref}
                animate={animation}
                className="grid grid-rows-1 justify-items-center gap-8 py-8 lg:grid-cols-3 lg:gap-16 lg:py-16">
                {blogData.map((data, key) => (
                    <BlogCard key={key} {...data} onClick={() => onClickBlog(data)} />
                ))}
            </motion.div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <img src={modalImage} className="h-full object-contain" />
            </Modal>
        </Container>
    );
};

export default Blog;
