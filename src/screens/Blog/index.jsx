import React from 'react';
import BlogCard from 'components/BlogCard';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';

const Blog = () => {
    return (
        <Container id="blog" fullScreen={false}>
            <div className="pt-8">
                <HeaderTitle title={'Blog'} />
            </div>
            <div className="py-8 lg:py-16 justify-items-center grid grid-rows-1 gap-8 lg:grid-cols-3 lg:gap-16">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </Container>
    );
};

export default Blog;
