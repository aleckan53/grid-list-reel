import { useState } from 'react';

const useSort = () => {
  const [sortType, setSortType] = useState('');

  return {
    sortType, setSortType
  };
};

export default useSort;