import React from 'react';
import styles from './css/Sort.module.css';
import { useToggle } from 'hooks';
import { 
  IoMdFunnel as Bars,
  IoMdClose as Close,
} from 'react-icons/io';


const Sort = ({ sortType, setSortType, orderDSC, setOrderDSC }) => {
  const handleClick = e => {
    const selected = e.target.dataset.type;
    setSortType(selected);

    if(selected === sortType) {
      setOrderDSC(!orderDSC);
    } else {
      setOrderDSC(true);
    }
  };
  
  const { toggled, onClick } = useToggle();

  return (
    <div className={styles.sort}>
      <button className={styles.toggle} onClick={onClick}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <button data-type='perDay' onClick={handleClick}>$ a day</button>
        <button data-type='progress' onClick={handleClick}>Progress</button>
        <button data-type='price' onClick={handleClick}>Price</button>
        <button data-type='name' onClick={handleClick}>Name</button>
      </>}
    </div>
  );
};

export default Sort;

  
