import React from 'react';
import Link from 'next/link';

const LinkPage = ({ page, onClick }) => {
    return (
        <Link href={`#${page.toLowerCase()}`}>
            <h1
                onClick={onClick}
                className="text-center text-4xl text-theme-primary font-black cursor-pointer hover:text-5xl">
                {page}
            </h1>
        </Link>
    );
};

export default LinkPage;
