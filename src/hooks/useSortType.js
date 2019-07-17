import { useContext } from 'react';
import DataContext from 'context/DataContext';

const useSortType = () => {
  const { store, setStore, setSortType } = useContext(DataContext);

  const onClick = e => {
    e.stopPropagation();
    const selectedSort = e.target.name;
    const sorted = store.sort(sortBy[selectedSort]);
  
    // setting sortType globally
    setSortType(selectedSort);

    // updating store
    setStore(sorted);
  };

  return {
    onClick
  };
};

export default useSortType;

const sortBy = {
  name(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return (
      nameA < nameB ? -1 :
      nameA > nameB ? 1 :
      0
    );
  },
  price(a, b) {
    const priceA = a.total;
    const priceB = b.total;

    return (
      priceA < priceB ? -1 :
      priceA > priceB ? 1 :
      0
    );
  },
  progress(a, b) {
    const progA = a.percentSaved;
    const progB = b.percentSaved;

    return (
      progA < progB ? -1 :
      progA > progB ? 1 :
      0
    );
  },
  perDay(a, b) {
    const progA = a.perDay;
    const progB = b.perDay;

    return (
      progA < progB ? -1 :
      progA > progB ? 1 :
      0
    );
  },
};

const orderBy = {
  dsc() {

  },
  asc() {

  },
};