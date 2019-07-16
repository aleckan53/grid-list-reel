import React, { useContext, useState, useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'
import List from '../List/List';
import DataContext from '../../context/DataContext';

export default function ListView() {

  const { data, setData } = useContext(DataContext);

  return (
    <section>
      <Search/>
      <Filter/>
      <List/>
    </section>
  );
};