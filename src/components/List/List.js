import React from 'react';
import styles from './css/List.module.css';

import Card from '../Card/Card';

const List = ({ isLoading, data=[] }) => {

  

  return !isLoading && (
    <ul 
      data-test-id='list'
      className={styles.list}>
      {data.map((item, idx) => <Card key={idx} data={item}/>)}
      {!data.length && <span>Not found. Please try again</span>}
    </ul>
  );
};

export default List;