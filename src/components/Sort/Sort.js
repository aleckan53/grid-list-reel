import React from 'react';
import styles from './css/Sort.module.css';
import { 
  IoMdFunnel as Bars,
  IoMdClose as Close,
  IoMdArrowDropup as Up,
  IoMdArrowDropdown as Down 
} from 'react-icons/io'

import { useToggle, useSortType } from 'hooks';

const Sort = () => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  const { sort } = useSortType();

  return (
    <div className={styles.sort}>
      <button className={styles.toggle}{...handleToggle}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <button name='perDay' onClick={sort}>$ per day</button>
        <button name='progress' onClick={sort}>Progress</button>
        <button name='price' onClick={sort}>Price</button>
        <button name='name' onClick={sort}>Name</button>
      </>}
    </div>
  );
};

export default Sort;