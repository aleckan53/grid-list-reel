import { useState, useEffect } from 'react';

const useAPI = (fetchData, context, searchTerm) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { store, setStore } = context;

  const effect = useEffect(() => {

    if(!store.length) {
      // if first render, do API request => populate context
      setIsLoading(true);
      fetchData()
        .then(res => {
          setData(res);
          setStore(res);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false))  
    } else {
      // if store has data
      const term = searchTerm.toLowerCase();
      const filtered = store.filter(item => item.name.toLowerCase().includes(term));

      setData(filtered);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return {
    effect, isLoading, data, setData
  };
};

export default useAPI;