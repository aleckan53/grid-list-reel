import React from 'react';
import styles from './Search.module.css';
import { useInput } from '../../hooks/customHooks';

export default function Search({setTerm}) {

  const handleInput = useInput('Search', console.log);

  return (
    <div className={styles.search}>
      <input 
        { ...handleInput }
        type='text' 
        className={styles.bar}/>
    </div>
  )
}