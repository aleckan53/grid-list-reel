/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import DataContext from 'context/DataContext';
import { Search, Sort, List } from 'components';
import { useAPI } from 'hooks';
import sortBy from 'utils/sortBy';

const ListView = () => {
  const { 
    store, 
    setOrderDSC, 
    setSortType, 
    sortType, 
    orderDSC, 
    searchTerm, 
    setSearchTerm 
  } = useContext(DataContext);

  const [data, setData] = useState([]);

  // loads data from API and updates local/global data
  const { isLoading } = useAPI(setData);

  // handles search
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filterd = store.filter(item => item.name.toLowerCase().includes(term));
    if (sortType) {
      filterd.sort((a, b) => sortBy[sortType](a, b, orderDSC));
    }

    setData(filterd);
  }, [searchTerm]);

  // observes changes of sort and order
  useEffect(() => {
    const items = [...data];
    items.sort((a, b) => sortBy[sortType](a, b, orderDSC));

    setData(items);
  }, [sortType, orderDSC]);

  return (
    <section>
      <Search
        setSearchTerm={setSearchTerm}/>
      <Sort 
        orderDSC={orderDSC}
        sortType={sortType}
        setOrderDSC={setOrderDSC}      
        setSortType={setSortType}/>
      <List 
        data={data} 
        isLoading={isLoading}/>
    </section>
  );
};

export default ListView;