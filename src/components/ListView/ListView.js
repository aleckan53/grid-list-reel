import React, { useContext } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'
import List from '../List/List';
import DataContext from '../../context/DataContext';
import { fetchData } from '../../service';

import useAPI from './hooks/useAPI';
import useLocalData from './hooks/useLocalData';
import useSearchTerm from './hooks/useSearchTerm';

const ListView = () => {
  const context = useContext(DataContext);
  // handles searching
  const { searchTerm, setSearchTerm, getResult } = useSearchTerm();

  // initialize local data state
  const { data, setData } = useLocalData([searchTerm], getResult);

  // handles data loading (API request || context)
  // updates local state (data)
  const { isLoading } = useAPI(fetchData, context, setData);

  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Filter/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};

export default ListView;