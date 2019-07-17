import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  sortType: '',
  orderDSC: '',
  setStore: () => {},
  setSortType: () => {},
  setOrderDSC: () => {},
});

export default DataContext;

export const DataProvider = ({ children }) => {

  const [store, setStore] = useState([]);
  const [sortType, setSortType] = useState('');
  const [orderDSC, setOrderDSC] = useState(true);

  return (
    <DataContext.Provider value={{
      store, setStore, sortType, setSortType, orderDSC, setOrderDSC
    }}>
      { children }
    </DataContext.Provider>
  );
};