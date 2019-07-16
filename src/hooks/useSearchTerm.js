import { useState } from 'react';

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getResult = (data=[]) => {
    const term = searchTerm.toLowerCase();
    const filtered = data.filter(item => item.name.toLowerCase().includes(term));
    return filtered;
  }

  return {
    searchTerm, setSearchTerm, getResult
  };
};

export default useSearchTerm;