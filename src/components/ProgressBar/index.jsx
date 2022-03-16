import React from 'react';

const ProgressBar = ({ skillName, percentage }) => {
    if (!skillName || !percentage) {
        return null;
    }
    return (
        <div className="pt-4 w-full lg:w-1/2">
            <p className="font-regular text-md">{skillName}</p>
            <div className="w-full bg-theme-bg/20 dark:bg-theme-lightBg/20 rounded-lg h-1 overflow-hidden">
                <div
                    className="bg-theme-primary rounded-lg h-1"
                    style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
