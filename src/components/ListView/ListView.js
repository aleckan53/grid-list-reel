import React, { useContext, useState, useEffect } from 'react';
import DataContext from 'context/DataContext';
import { Search, Sort, List } from 'components';
import { useAPI, useSearchTerm, useSort, useOrder } from 'hooks';
import sortBy from 'utils/sortBy';

const ListView = () => {
  const { store } = useContext(DataContext);
  const [data, setData] = useState([]);

  // loads data from API and updates local/global data
  const { isLoading } = useAPI(setData);

  // handles search
  const { searchTerm, setSearchTerm } = useSearchTerm();

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filterd = store.filter(item => item.name.toLowerCase().includes(term));
    setData(filterd);
  }, [searchTerm]);

  // handles sort and order
  const { sortType, setSortType } = useSort();
  const { orderDSC, setOrderDSC } = useOrder();

  useEffect(() => {
    const items = [...data];
    items.sort((a, b) => sortBy[sortType](a, b, orderDSC));

    setData(items);
  }, [sortType, orderDSC]);

  return (
    <section>
      <Search setSearchTerm={setSearchTerm}/>
      <Sort 
        orderDSC={orderDSC}
        sortType={sortType}
        setOrderDSC={setOrderDSC}      
        setSortType={setSortType}/>
      <List data={data} isLoading={isLoading}/>
    </section>
  );
};

export default ListView;