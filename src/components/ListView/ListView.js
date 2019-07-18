/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import DataContext from 'context/DataContext';
import { Search, Sort, List } from 'components';
import { useAPI } from 'hooks';
import sortBy from 'utils/sortBy';
import styles from './css/ListView.module.css';

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

  // 'useSearch' handles search
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filterd = store.filter(item => item.name.toLowerCase().includes(term));
    if (sortType) {
      filterd.sort((a, b) => sortBy[sortType](a, b, orderDSC));
    }

    setData(filterd);
  }, [searchTerm]);

  // 'useSort' observes changes of sort and order
  useEffect(() => {
    const items = [...data];
    items.sort((a, b) => sortBy[sortType](a, b, orderDSC));

    setData(items);
  }, [sortType, orderDSC]);

  return (
    <>
      <section className={styles.top}>
        <Search
          setSearchTerm={setSearchTerm}/>
        <Sort 
          orderDSC={orderDSC}
          sortType={sortType}
          setOrderDSC={setOrderDSC}      
          setSortType={setSortType}/>
      </section>
      <List 
        data={data} 
        isLoading={isLoading}/>
    </>
  );
};

export default ListView;