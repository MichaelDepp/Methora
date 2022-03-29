import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import constants from '../../constants';

const TestimonyCard = () => {
    return (
        <div className="max-w-sm h-80 bg-gray-200 dark:bg-theme-dark text-theme-bg dark:text-theme-lightBg grid grid-rows-3">
            <div className="rounded-t-lg row-span-2 grid content-around px-4">
                <FaQuoteLeft size={38} color={constants.colors.theme.primary} />
                <p className="font-bold text-xl">
                    {
                        'Its super product with professional support team. i cant wait to see the future features.'
                    }
                </p>
            </div>
            <div className="rounded-b-lg row-span-1 grid grid-flow-col content-center gap-4 justify-start px-4">
                <img
                    className="object-contain w-14 h-14 rounded-full"
                    // src={props.image}
                    src="https://randomuser.me/api/portraits/women/81.jpg"
                    alt="user image"
                />
                <div className="my-auto">
                    <h3 className="font-bold text-md">{'Emily Peterson'}</h3>
                    <p className="font-bold text-xs">{'Mobile Engineer, Tesla'}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;
