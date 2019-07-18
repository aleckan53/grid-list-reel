import React from 'react';
import styles from './css/Sort.module.css';
import { useToggle } from 'hooks';
import SortBtn from './components/SortBtn';
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
  
  const { toggled, onClick } = useToggle(false);
  const btnProps = { orderDSC, sortType, onClick: handleClick };

  return (
    <div className={styles.sort}>
      <button className={styles.toggle} onClick={onClick}>{toggled ? <Close/> : <Bars/>}</button>
      {toggled && <>
        <SortBtn name='perDay' {...btnProps}/>
        <SortBtn name='price' {...btnProps}/>
        <SortBtn name='progress' {...btnProps}/>
        <SortBtn name='name' {...btnProps}/>
      </>}
    </div>
  );
};

export default Sort;

  
