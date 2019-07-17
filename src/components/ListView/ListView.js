import React, { useContext } from 'react';
import DataContext from 'context/DataContext';
import { fetchData } from 'service';
import { Search, Sort, Filter, List } from 'components';
import { useAPI, useLocalData, useSearchTerm } from 'hooks';

const ListView = () => {
  const context = useContext(DataContext);
  // handles searching
  const { searchTerm, setSearchTerm, getResult } = useSearchTerm();

  // initializes local data state
  // manipulates state trough dependancies array
  const { data, setData } = useLocalData(
    [searchTerm, context.sortType, context.orderDSC], getResult
  );

  // handles data loading (API request || context)
  // updates local state (data)
  const { isLoading } = useAPI(fetchData, context, setData);

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