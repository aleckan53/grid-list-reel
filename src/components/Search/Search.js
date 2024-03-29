import React from 'react';
import styles from './css/Search.module.css';
import { useInput } from 'hooks';

const Search = ({ setSearchTerm }) => {
  // updates search term
  // waits when typing finished, default timeout(3rd argument) = 600
  const { spin, ...handleInput } = useInput('Search', setSearchTerm, 600);

  return (
    <div className={styles.search}>
    <input 
      { ...handleInput }
      type='text' 
      className={styles.bar}/>
      <div className={styles.load} data-spin={spin}></div>  
    </div>
  );
};

export default Search;