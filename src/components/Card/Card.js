import React from 'react';
import styles from './css/Card.module.css';

import { useToggle } from 'hooks';

const Card = ({data}) => {

  const { "data-toggle": toggled, onClick } = useToggle();

  const bgImage = {
    backgroundImage: `url(${data.img})`,
  };

  return (
    <li className={`${styles.card } ${toggled && styles.expand}`}>
      <div className={ styles.img } style={ bgImage }/>
      <div className={ styles.info }>
        <h3>{ data.name }</h3>
        <p>${ data.saved } of ${ data.total }</p>
        <p>{ data.status }</p>
      </div>
      <div className={ styles.progress }>
        { data.percentSaved }
      </div>
      <div 
        className={`${styles.details } ${toggled && styles.expand}`}>
        <p><span>Days left:</span><span>{ 12 }</span></p>  
        <p><span>$ per day:</span><span>${ data.perDay }</span></p>    
        <p><span>Start date:</span><span>{ data.started }</span></p>    
        <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>    
        <button>Save faster</button>  
        <button>Pause</button>  
      </div>
      <button 
        onClick={onClick}
        className={ styles.toggle }>
        {toggled ? 'Hide details' : 'View details'}
      </button>
    </li>
  );
};

export default Card;