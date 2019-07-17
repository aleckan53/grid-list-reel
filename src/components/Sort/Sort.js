import React from 'react';

import { useToggle, useSortType } from 'hooks';

const Sort = () => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  const { sort } = useSortType();

  return (
    <div>
      <button {...handleToggle}>{toggled ? 'Close' : 'Sort'}</button>
      {toggled && (
        <div>
          <button name='name' onClick={sort}>Name</button>
          <button name='price' onClick={sort}>Price</button>
          <button name='progress' onClick={sort}>Progress</button>
          <button name='perDay' onClick={sort}>$ per day</button>
        </div>
      )}
    </div>
  );
};

export default Sort;