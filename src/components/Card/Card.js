import React, { useState } from 'react';
import styles from './Card.module.css';

export default function Card() {

  const [viewDeatils, setViewDetials] = useState(true);

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
        <p><span>Start date</span><span>{ data.started }</span></p>    
        <p><span>Estimated finsh date</span><span>{ data.started }</span></p>    
        <p><span>$ per day</span><span>{ data.perDay }</span></p>    
        <p><span>Days left</span><span>{ 12 }</span></p>  
        <button>Save faster</button>  
        <button>Pause</button>  
      </div>
      <button 
        onClick={() => setViewDetials(!viewDeatils)}
        className={ styles.toggle }>
        {viewDeatils ? 'Hide details' : 'View details'}
      </button>
    </li>
  )
}


const data = {
  img: 'http://www.pngmart.com/files/3/BMW-M3-Transparent-Background.png',
  name: 'BMW 328ci',
  status: 'active',
  total: 35000,
  started: '2017-5-1',
  perDay: 15,
  saved: 12000,
  percentSaved: 34,
}