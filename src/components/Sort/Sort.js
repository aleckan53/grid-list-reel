import React from 'react';
import styles from './css/Sort.module.css';
import { useToggle, useSortType } from 'hooks';
import { 
  IoMdFunnel as Bars,
  IoMdClose as Close,
  IoMdArrowDropdown as Down,
  IoMdArrowDropup as Up
} from 'react-icons/io';


const Sort = () => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  const { sort, orderDSC, sortType } = useSortType();

  const showArrow = (name) => 
    (!orderDSC && sortType === name) || (sortType !== name)
      ? <Down/>
      : <Up/>

  return (
    <div className={styles.sort}>
      <button className={styles.toggle} {...handleToggle}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <button data-type='perDay' onClick={sort}>$ a day {showArrow('perDay')}</button>
        <button data-type='progress' onClick={sort}>Progress {showArrow('progress')}</button>
        <button data-type='price' onClick={sort}>Price {showArrow('price')}</button>
        <button data-type='name' onClick={sort}>Name {showArrow('name')}</button>
      </>}
    </div>
  );
};

export default Sort;

// {!orderDSC && sortType === 'name' ? 'true' : 'false'}