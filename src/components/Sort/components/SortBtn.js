import React from 'react';

const SortBtn = ({ orderDSC, sortType, onClick, name }) => {
  return (
    <button 
      data-type={name} 
      onClick={onClick} 
      data-active={sortType === name}
      data-arrow={sortType === name && !orderDSC ? 'up' : 'down'}>
      $ a day
    </button>
  );
};

export default SortBtn;