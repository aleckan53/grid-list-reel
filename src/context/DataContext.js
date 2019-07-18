import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  setStore: () => {},
  updateItem: () => {},
});

export default DataContext;

export const DataProvider = ({ children }) => {

  const [store, setStore] = useState([]);

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
    }}>
      { children }
    </DataContext.Provider>
  );
};