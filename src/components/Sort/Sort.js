import React from 'react';
import styles from './css/Sort.module.css';
import { IoMdFunnel as Bars, IoMdClose as Close } from 'react-icons/io';

import { useToggle, useSortType } from 'hooks';

const Sort = () => {
  const handleToggle = useToggle();
  const toggled = handleToggle["data-toggle"];
  
  const { sort} = useSortType();

  return (
    <div className={styles.sort}>
      <button className={styles.toggle} {...handleToggle}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <button data-type='perDay' onClick={sort}>$ a day</button>
        <button data-type='progress' onClick={sort}>Progress</button>
        <button data-type='price' onClick={sort}>Price</button>
        <button data-type='name' onClick={sort}>Name</button>
      </>}
    </div>
  );
};

export default Sort;

// {!orderDSC && sortType === 'name' ? 'true' : 'false'}