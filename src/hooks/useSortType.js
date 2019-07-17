import { useContext } from 'react';
import DataContext from 'context/DataContext';
import sortBy from 'utils/sortBy';

const useSortType = () => {
  const { 
    store, setStore, sortType, setSortType, orderDSC, setOrderDSC
  } = useContext(DataContext);

  const sort = e => {
    e.stopPropagation();
    const selectedSort = e.target.dataset.type;
    let order = orderDSC;

    // if the same sortType selected 2nd time, change order
    setOrderDSC(!orderDSC);
    setSortType(selectedSort);

    // resets order to descending if sortType switched
    if (selectedSort !== sortType && sortType.length) {
      order = true;
    }

    const sorted = store.sort((a, b) => sortBy[selectedSort](a, b, order));

    // updating store
    setStore(sorted);
  };

  return {
    sort, orderDSC, sortType
  };
};

export default useSortType;