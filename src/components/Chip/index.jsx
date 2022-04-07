import React from 'react';

const Chip = (props) => {
    const colorConfig = props.selected ? 'bg-theme-primary' : 'bg-gray-200 dark:bg-theme-darkLight';

    const chipClicked = () => props.onClick(props.name);

    return (
        <div
            className={`flex cursor-pointer items-center justify-center rounded-full px-4 py-2 hover:bg-theme-primary dark:hover:bg-theme-primary ${colorConfig}`}
            onClick={chipClicked}>
            <div
                className={`text-xs font-normal leading-none lg:text-sm ${
                    props.selected && 'text-white'
                }`}>
                {props.name}
            </div>
        </div>
    );
};

export default Chip;
