import React, { useContext, useState, useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'
import List from '../List/List';
import DataContext from '../../context/DataContext';
import { fetchData } from '../../service';

import useAPI from './api';

export default function ListView() {
  const { store, setStore } = useContext(DataContext);

  // mock API request
  const effect = useAPI(fetchData, store, setStore);
  const { data, isLoading } = effect;

  return (
    <section>
      <Search/>
      <Filter/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};