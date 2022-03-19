import React from 'react';

const Button = ({ text, onClick }) => {
    if (!text) {
        return null;
    }
    return (
        <button
            onClick={onClick}
            className="text-white dark:text-theme-bg bg-theme-primary focus:ring-4 font-bold rounded-lg text-lg px-4 py-1 lg:py-2 text-center mb-2">
            {text}
        </button>
    );
};

export default Button;
