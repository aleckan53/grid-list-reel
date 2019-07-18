import React from 'react';

const SortBtn = ({ orderDSC, sortType, onClick, name }) => {
  return (
    <button 
      data-type={name} 
      onClick={onClick} 
      data-arrow={sortType === name && !orderDSC ? 'up' : 'down'}>
      $ a day
    </button>
  );
};

export default SortBtn;