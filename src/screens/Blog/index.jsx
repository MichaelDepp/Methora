import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import BlogCard from 'components/BlogCard';
import BlogPage from 'components/BlogPage';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import Modal from 'components/Modal';

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const { ref, inView } = useInView();
    const animation = useAnimation();

    // Animation Configuration
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

    // Sample Blog Data
    const blogData = [
        {
            title: 'How many camera lenses do you regularly switch between?',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc: '/assets/blog/blog-1.webp',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: 'How to Be a 10x Fashion Photgrapher',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc: '/assets/blog/blog-2.webp',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: '💪Become a Creative Editing Master using these awesome tools 🖱',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc: '/assets/blog/blog-3.webp',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        },
        {
            title: '4 Core things to always do when you scouting for location.',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, mauris eget rutrum maximus, enim dui interdum',
            imageSrc: '/assets/blog/blog-4.webp',
            link: 'https://dev.to/david_ojeda/road-to-aws-certification-2438'
        }
    ];

    // Function when blog is clicked
    // This will trigger the modal and display the image
    const onClickBlog = (data) => {
        setSelectedBlog(data);
        setIsOpen(true);
    };

    // Function to close the modal
    const onCloseModal = () => setIsOpen(false);

    return (
        <Container id="blog" fullScreen={false}>
            {/* Start Title Section */}
            <div className="pt-8">
                <HeaderTitle title={'Blog'} />
            </div>
            {/* End Title Section */}

            {/* Start Blog Cards Section */}
            <motion.div
                ref={ref}
                animate={animation}
                className="grid grid-rows-1 justify-items-center gap-8 py-8 lg:grid-cols-3 lg:gap-16 lg:py-16">
                {blogData.map((data, key) => (
                    <BlogCard key={key} {...data} onClick={() => onClickBlog(data)} />
                ))}
            </motion.div>
            {/* End Blog Cards Section */}

            {/* Start Blog Modal Section */}
            {selectedBlog && (
                <Modal isOpen={isOpen} closeModal={onCloseModal}>
                    <BlogPage {...selectedBlog} />
                </Modal>
            )}
            {/* <Modal isOpen={isOpen} closeModal={onCloseModal}>
                <img src={selectedBlog?.imageSrc} className="object-contain lg:h-full" />
            </Modal> */}
            {/* End Blog Modal Section */}
        </Container>
    );
};

export default Blog;
