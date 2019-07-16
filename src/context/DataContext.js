import React, { useState } from 'react';

const DataContext = React.createContext({
  store: [],
  setStore: () => {},
});

export default DataContext;

export function DataProvider({ children }) {

  const [store, setStore] = useState([]);

  return (
    <DataContext.Provider value={{
      store, setStore
    }}>
      { children }
    </DataContext.Provider>
  );
};