import React from 'react';
import Link from 'next/link';

const LinkPage = ({ page, onClick }) => {
    return (
        <Link href={`#${page.toLowerCase()}`}>
            <h1
                onClick={onClick}
                className="cursor-pointer text-center text-4xl font-bold tracking-wide text-theme-primary hover:text-5xl">
                {page}
            </h1>
        </Link>
    );
};

export default LinkPage;
