import React, { useContext, useState, useEffect } from 'react';
import DataContext from 'context/DataContext';
import { Search, Sort, List } from 'components';
import { useAPI, useSearchTerm } from 'hooks';

const ListView = () => {
  const { store } = useContext(DataContext);
  const [data, setData] = useState([]);

  // loads data from API and updates local/global data
  const { isLoading } = useAPI(setData);

  // handles search
  const { searchTerm, setSearchTerm } = useSearchTerm();

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filterd = store.filter(item => item.name.toLowerCase().includes(term))
    setData(filterd);
  }, [searchTerm])

  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Sort/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};

export default ListView;