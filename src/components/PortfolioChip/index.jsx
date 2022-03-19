import React, { useState } from 'react';
import Chip from '../Chip';

const PortfolioChip = () => {
    const [activeChip, setActiveChip] = useState('All');

    const onClickChip = (name) => setActiveChip(name);
    return (
        <div className="flex flex-wrap justify-center">
            <Chip name={'All'} selected={activeChip === 'All'} onClick={onClickChip} />
            <Chip name={'Flutter'} selected={activeChip === 'Flutter'} onClick={onClickChip} />
            <Chip name={'Ui Design'} selected={activeChip === 'Ui Design'} onClick={onClickChip} />
        </div>
    );
};

export default PortfolioChip;
