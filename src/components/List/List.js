import React from 'react';
import styles from './List.module.css';

import Card from '../Card/Card';

export default function List({ isLoading, data=[] }) {

  return isLoading ? '' : (
    <ul 
      data-test-id='list'
      className={styles.list}>
      {data.map((item, idx) => <Card key={idx} data={item}/>)}
    </ul>
  );
};