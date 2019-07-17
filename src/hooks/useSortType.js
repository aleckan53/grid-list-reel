import { useState, useContext } from 'react';
import DataContext from 'context/DataContext';

const useSortType = () => {
  const { store, setStore, sortType, setSortType } = useContext(DataContext);

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
    )
  },
  price() {

  },
  progress() {

  },
  perDay() {

  }
};

const orderBy = {
  dsc() {

  },
  asc() {

  },
};