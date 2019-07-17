import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  sortType: '',
  orderDSC: '',
  setStore: () => {},
  setSortType: () => {},
  setOrderDSC: () => {},
  updateItem: () => {},
});

export default DataContext;

export const DataProvider = ({ children }) => {

  const [store, setStore] = useState([]);
  const [sortType, setSortType] = useState('');
  const [orderDSC, setOrderDSC] = useState(true);

  const updateItem = (id, key, val) => {
    const item = store.find(data => data.id === id);
    if (item) {
      item[key] = val;
    }

    setStore([...store]);
  };

  return (
    <DataContext.Provider value={{
      store,
      setStore,
      sortType,
      setSortType,
      orderDSC, 
      setOrderDSC,
      updateItem,
    }}>
      { children }
    </DataContext.Provider>
  );
};