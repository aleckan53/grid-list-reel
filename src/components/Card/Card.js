import React, { useContext, useEffect } from 'react';
import styles from './css/Card.module.css';
import { Image, Info, Progress, Details } from './components';

import { useToggle } from 'hooks';
import DataContext from 'context/DataContext';

const Card = ({ data }) => {

  const { "data-toggle": viewMore, onClick: toggleDropDown } = useToggle();


  // collapses drop down if list resorted or reorderd
  const { sortType, orderDSC } = useContext(DataContext);
  
  useEffect(() => {
    if (viewMore) {
      toggleDropDown();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, orderDSC])

  return (
    <li className={`${styles.card } ${viewMore && styles.expand}`}>
      <Image className={styles.img} img={data.img}/>
      <Info className={styles.info} data={data}/>
      <Progress className={styles.progress} percent={data.percentSaved}/>
      <Details data={data} classes={{
        container: `${styles.details } ${viewMore && styles.expand}`,
        controls : styles.controls
      }}/>
      <button 
        onClick={toggleDropDown}
        className={ styles.toggle }>
        {viewMore ? 'Hide details' : 'View details'}
      </button>
    </li>
  );
};

export default Card;