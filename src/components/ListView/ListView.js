import React, { useContext, useState, useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'
import List from '../List/List';
import DataContext from '../../context/DataContext';
import { fetchData } from '../../service';

import useAPI from './hooks/useAPI';

export default function ListView() {
  const { store, setStore } = useContext(DataContext);

  // mock API request
  const effect = useAPI(fetchData, store, setStore);
  const { data, isLoading } = effect;

  // handle search
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    
  }, [])

  // setting local data


  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Filter/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};