import React from 'react';

import { useToggle, useSortType } from 'hooks';

const Sort = () => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  const { sortType, onClick } = useSortType();

  return (
    <div>
      <button {...handleToggle}>{toggled ? 'Close' : 'Sort'}</button>
      {toggled && (
        <div>
          <button name='name' onClick={onClick}>Name</button>
          <button name='price' onClick={onClick}>Price</button>
          <button name='progress' onClick={onClick}>Progress</button>
          <button name='perDay' onClick={onClick}>$ per day</button>
        </div>
      )}
    </div>
  )
};

export default Sort;