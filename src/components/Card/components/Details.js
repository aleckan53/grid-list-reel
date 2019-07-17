import React from 'react';
import { useToggle, useInput } from 'hooks';
import Range from './Range';

import { IoMdOptions as Options, IoMdPause as Pause } from 'react-icons/io';

const Details = ({ data, classes }) => {

  const { "data-toggle": toggled, onClick } = useToggle();
  const handleInput = useInput();

  const { container, controls } = classes;

  return (
    <div className={container}>
      <p><span>Days left:</span><span>{ 12 }</span></p>  
      <p><span>$ per day:</span><span>${ handleInput.value || data.perDay }</span></p>    
      <p><span>Start date:</span><span>{ data.started }</span></p>    
      <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>  
      <div className={controls}>
        {toggled ? <Range perDay={data.perDay} id={data.id} handleInput={handleInput} onClick={onClick}/> : <button onClick={onClick}><Options/><span>Save faster</span></button> } 
        <button><Pause/><span>Pause</span></button>  
      </div>
    </div>
  )
};

export default Details;