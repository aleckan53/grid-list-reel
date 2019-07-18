import React, { useContext, useState, useEffect } from 'react';
import DataContext from 'context/DataContext';
import { fetchData } from 'service';
import { Search, Sort, List } from 'components';
import { useAPI, useLocalData, useSearchTerm } from 'hooks';

const ListView = () => {
  const { store } = useContext(DataContext);
  const [data, setData] = useState([]);

  // handles search
  const { searchTerm, setSearchTerm } = useSearchTerm();

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filterd = store.filter(item => item.name.toLowerCase().includes(term))
    setData(filterd);
  }, [searchTerm])

  // handles data loading (API request || context)
  // updates local state (data)
  const { isLoading } = useAPI(fetchData, setData);

  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Sort/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};

export default ListView;