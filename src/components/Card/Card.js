import React from 'react';
import styles from './Card.module.css';

export default function Card() {

  const bgImage = {
    backgroundImage: `url(${data.img})`,
  };

  return (
    <li className={styles.card}>

      <div className={ styles.img } style={ bgImage }/>
      <div className={ styles.info }>
        <h3>{ data.name }</h3>
        <p>{ data.saved }</p>
        <p>{ data.status }</p>
      </div>
      <div className={ styles.progress }>
        { data.percentSaved }
      </div>
      <div className={ styles.details }></div>
      <button className={ styles.toggle }>View details</button>
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