import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import constants from '../../constants';

const TestimonyCard = (props) => {
    return (
        <div className="max-w-sm h-80 bg-gray-200 dark:bg-theme-darkLight text-theme-bg dark:text-theme-lightBg grid grid-rows-3">
            <div className="rounded-t-lg row-span-2 grid content-around px-4">
                <FaQuoteLeft size={38} color={constants.colors.theme.primary} />
                <p className="font-bold text-xl">{props.testimony}</p>
            </div>
            <div className="rounded-b-lg row-span-1 grid grid-flow-col content-center gap-4 justify-start px-4">
                <img
                    className="object-cover w-14 h-14 rounded-full"
                    src={props.image}
                    alt="user image"
                />
                <div className="my-auto">
                    <h3 className="font-bold text-md">{props.name}</h3>
                    <p className="font-bold text-xs">{props.position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;
