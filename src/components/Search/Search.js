import React from 'react';
import styles from './Search.module.css';

export default function Search() {
  return (
    <div className={styles.search}>
      <input type='text' className={styles.bar}/>
    </div>
  )
}