import React, { useContext, useState } from 'react';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter'
import List from '../List/List';
import DataContext from '../../context/DataContext';
import { fetchData } from '../../service';

import useAPI from './hooks/useAPI';

const ListView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const context = useContext(DataContext);

  // handles data
  const effect = useAPI(fetchData, context, searchTerm);
  const { data, isLoading } = effect;

  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Sort/>
      <Filter/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};

export default ListView;