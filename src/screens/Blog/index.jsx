import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactModal from 'react-modal';

import BlogCard from 'components/BlogCard';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import Modal from 'components/Modal';
import constants from '../../constants';

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

    const onCloseModal = () => setIsOpen(false);

    // Remove in future if not gonna use react modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'green',
            border: 'none'
        },
        overlay: {
            backgroundColor: `${constants.colors.theme.bg}cc`,
            zIndex: 50
        }
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
            {/* <ReactModal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
                <img src={modalImage} className="object-contain" />
            </ReactModal> */}
            <Modal isOpen={isOpen} closeModal={onCloseModal}>
                <img src={modalImage} className="object-contain lg:h-full" />
            </Modal>
        </Container>
    );
};

export default Blog;
