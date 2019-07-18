import React from 'react';
import styles from './css/Card.module.css';
import { Image, Info, Progress, Details } from './components';

import { useToggle } from 'hooks';

const Card = ({ data }) => {

  const { toggled: viewMore, onClick: toggleDropDown } = useToggle();

  return (
    <li className={`${styles.card } ${viewMore && styles.expand}`}>
      <Image className={styles.img} img={data.img}/>
      <Info className={styles.info} data={data}/>
      <Progress className={styles.progress} percent={data.percentSaved} status={data.status}/>
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