import { useState, useEffect } from 'react';

const defaultContextProps = {
  store: [],
  setStore: () => {},
}

const useAPI = (fetchData, context = defaultContextProps, setParentState) => {
  const [isLoading, setIsLoading] = useState(true);
  const { store, setStore } = context;

  const effect = useEffect(() => {
    if(!store.length) {
      // if first render, do API request => populate context
      setIsLoading(true);
      fetchData()
        .then(res => {
          setParentState(res);
          setStore(res);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false))  
    } else {
      // when rerender, if store already has data
      setParentState(store);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    effect, isLoading
  };
};

export default useAPI;


