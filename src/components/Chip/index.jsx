import React from 'react';

const Chip = (props) => {
    const colorConfig = props.selected ? 'bg-theme-primary' : 'bg-gray-200 dark:bg-theme-dark';

    const chipClicked = () => props.onClick(props.name);

    return (
        <div
            className={`cursor-pointer flex justify-center items-center px-4 py-2 rounded-full hover:bg-theme-primary dark:hover:bg-theme-primary ${colorConfig}`}
            onClick={chipClicked}>
            <div
                className={`text-xs lg:text-sm font-normal leading-none ${
                    props.selected && 'text-white'
                }`}>
                {props.name}
            </div>
        </div>
    );
};

export default Chip;
