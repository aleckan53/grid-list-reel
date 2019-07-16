import React from 'react';
import styles from './css/Search.module.css';
import { useInput } from './hooks/useInput';

export default function Search({ setSearchTerm }) {

  const handleInput = useInput('Search', setSearchTerm);

  return (
    <div className={styles.search}>
      <input 
        { ...handleInput }
        type='text' 
        className={styles.bar}/>
    </div>
  );
};