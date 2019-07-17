import React from 'react';
import { useToggle, useInput } from 'hooks';
import Range from './Range';

const Details = ({ data, className }) => {

  const { "data-toggle": toggled, onClick } = useToggle();
  const handleInput = useInput();

  return (
    <div className={className}>
      <p><span>Days left:</span><span>{ 12 }</span></p>  
      <p><span>$ per day:</span><span>${ handleInput.value || data.perDay }</span></p>    
      <p><span>Start date:</span><span>{ data.started }</span></p>    
      <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>  
      {toggled ? <Range perDay={data.perDay} handleInput={handleInput}/> : <button onClick={onClick}>Save faster</button> } 
      <button>Pause</button>  
    </div>
  )
};

export default Details;