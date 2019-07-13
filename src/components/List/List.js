import React, { useState, useEffect } from 'react';
import styles from './List.module.css';

import { fetchData } from '../../service';
import Card from '../Card/Card';

export default function List() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(setData)
      .finally(() => setIsLoading(false))
      // no catch needed, mock function
  }, []);

  return (
    <ul 
      data-test-id='list'
      className={styles.list}>
      {isLoading ? '' : (
        data.map((item, idx) => <Card key={idx} data={item}/>)
      )}
    </ul>
  )
}