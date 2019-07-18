import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  sortType: '',
  orderDSC: null,
  searchTerm: '',
  setStore: () => {},
  updateItem: () => {},
  setSortType: () => {},
  setOrderDSC: () => {},
  setSearchTerm: () => {},
});

export default DataContext;

export const DataProvider = ({ children }) => {

  const [store, setStore] = useState([]);
  const [sortType, setSortType] = useState('');
  const [orderDSC, setOrderDSC] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
      updateItem,
      sortType,
      setSortType,
      orderDSC,
      setOrderDSC,
      searchTerm,
      setSearchTerm,
    }}>
      { children }
    </DataContext.Provider>
  );
};