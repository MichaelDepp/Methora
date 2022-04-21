import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import constants from '../../constants';

const TestimonyCard = (props) => {
    return (
        <div className="grid h-80 max-w-sm grid-rows-3 bg-gray-200 text-theme-bg dark:bg-theme-darkLight dark:text-theme-lightBg">
            <div className="row-span-2 grid content-around rounded-t-lg px-4">
                <FaQuoteLeft size={38} color={constants.colors.theme.primary} />
                <p className="text-lg font-bold line-clamp-4 lg:text-xl">{props.testimony}</p>
            </div>
            <div className="row-span-1 grid grid-flow-col content-center justify-start gap-4 rounded-b-lg px-4">
                <img
                    className="h-14 w-14 rounded-full object-cover"
                    src={props.image}
                    alt="user image"
                />
                <div className="my-auto">
                    <h3 className="text-md font-bold">{props.name}</h3>
                    <p className="text-xs font-bold">{props.position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;
