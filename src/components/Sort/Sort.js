import React from 'react';
import styles from './css/Sort.module.css';
import { useToggle, useSortType } from 'hooks';
import { 
  IoMdFunnel as Bars,
  IoMdClose as Close,
  IoMdArrowDropdown as Down,
  IoMdArrowDropup as Up
} from 'react-icons/io';


const Sort = ({ setSortType }) => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  // const { sort, orderDSC, sortType } = useSortType();

  // const showArrow = (name) => 
  //   (!orderDSC && sortType === name) || (sortType !== name)
  //     ? <Down/>
  //     : <Up/>

  const handleClick = e => {
    const selected = e.target.dataset.type;
    setSortType(selected);
  };

  return (
    <div className={styles.sort}>
      <button className={styles.toggle} {...handleToggle}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <button data-type='perDay' onClick={handleClick}>$ a day </button>
        <button data-type='progress' onClick={handleClick}>Progress </button>
        <button data-type='price' onClick={handleClick}>Price </button>
        <button data-type='name' onClick={handleClick}>Name </button>
      </>}
    </div>
  );
};

export default Sort;

// {!orderDSC && sortType === 'name' ? 'true' : 'false'}