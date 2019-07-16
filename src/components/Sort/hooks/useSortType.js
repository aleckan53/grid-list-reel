import { useState } from 'react';

const useSortType = () => {
  const [sortType, setSortType] = useState('');

  const onClick = e => {
    e.stopPropagation();
    setSortType(e.target.name);
  };

  return {
    sortType, onClick
  };
};

export default useSortType;