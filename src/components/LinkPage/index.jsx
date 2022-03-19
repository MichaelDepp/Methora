import React from 'react';
import Link from 'next/link';

const LinkPage = ({ page, onClick }) => {
    return (
        <Link href={`#${page.toLowerCase()}`}>
            <h1
                onClick={onClick}
                className="text-center text-2xl text-theme-primary font-black cursor-pointer">
                {page}
            </h1>
        </Link>
    );
};

export default LinkPage;
