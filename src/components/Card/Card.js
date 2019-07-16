import React, { useState } from 'react';
import styles from './css/Card.module.css';

export default function Card({data}) {

  const [viewDeatils, setViewDetials] = useState(false);

  const bgImage = {
    backgroundImage: `url(${data.img})`,
  };

  return (
    <li className={`${styles.card } ${!viewDeatils? '' : styles.expand}`}>
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
        className={`${styles.details } ${!viewDeatils? '' : styles.expand}`}>
        <p><span>Days left:</span><span>{ 12 }</span></p>  
        <p><span>$ per day:</span><span>${ data.perDay }</span></p>    
        <p><span>Start date:</span><span>{ data.started }</span></p>    
        <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>    
        <button>Save faster</button>  
        <button>Pause</button>  
      </div>
      <button 
        onClick={() => setViewDetials(!viewDeatils)}
        className={ styles.toggle }>
        {viewDeatils ? 'Hide details' : 'View details'}
      </button>
    </li>
  );
};