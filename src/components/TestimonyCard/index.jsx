import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import constants from '../../constants';

const TestimonyCard = (props) => {
    if (!props.image) {
        return null;
    }

    return (
        <div className="grid h-80 max-w-sm grid-rows-3 bg-gray-200 text-theme-bg dark:bg-theme-darkLight dark:text-theme-lightBg">
            {/* Start Testimony Section */}
            <div className="row-span-2 grid content-around rounded-t-lg px-4">
                <FaQuoteLeft size={38} color={constants.colors.theme.primary} />
                <p className="text-lg font-bold line-clamp-4 lg:text-xl">{props.testimony}</p>
            </div>
            {/* End Testimony Section */}

            {/* Start Reviewer Section */}
            <div className="row-span-1 grid grid-flow-col content-center justify-start gap-4 rounded-b-lg px-4">
                <Image
                    src={props.image}
                    alt="user image"
                    layout="fixed"
                    height={50}
                    width={50}
                    objectFit="cover"
                    className="rounded-full"
                />
                <div className="my-auto">
                    <p className="text-md font-bold">{props.name}</p>
                    <p className="text-xs font-bold">{props.position}</p>
                </div>
            </div>
            {/* End Reviewer Section */}
        </div>
    );
};

export default TestimonyCard;
