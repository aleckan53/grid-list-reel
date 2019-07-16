import { useState, useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';

const useLocalData = (deps=[], cb=()=>{}) => {

  const [data, setData] = useState([]);

  const { store } = useContext(DataContext);

  const effect = useEffect(() => {
    const newData = cb(store);
    setData(newData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  
  return {
    data, setData, effect
  };
};

export default useLocalData;