import React, { useState } from 'react';

const DataContext = React.createContext({
  data: [],
  setData: () => {},
});

export default DataContext;

export function DataProvider({ children }) {

  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{
      data, setData
    }}>
      { children }
    </DataContext.Provider>
  );
};