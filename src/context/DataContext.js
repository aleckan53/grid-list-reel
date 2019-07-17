import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  sortType: '',
  order: '',
  setStore: () => {},
  setSortType: () => {},
  setOrder: () => {},
});

export default DataContext;

export const DataProvider = ({ children }) => {

  const [store, setStore] = useState([]);
  const [sortType, setSortType] = useState('');
  const [order, setOrder] = useState('DESC');

  return (
    <DataContext.Provider value={{
      store, setStore, sortType, setSortType, order, setOrder
    }}>
      { children }
    </DataContext.Provider>
  );
};