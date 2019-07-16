import { useState, useEffect } from 'react';

const useAPI = (fetchData, store=[], setStore = () =>{}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const effect = useEffect(() => {

    if(!store.length) {
      setIsLoading(true);
      fetchData()
        .then(res => {
          setData(res);
          setStore(res);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false))  
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    effect, isLoading, data
  }
}

export default useAPI;