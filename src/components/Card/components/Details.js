import React from 'react';
import { useToggle } from 'hooks';

const Details = ({ data, className }) => {

  const { "data-toggle": toggled, onClick } = useToggle();

  return (
    <div className={className}>
      <p><span>Days left:</span><span>{ 12 }</span></p>  
      <p><span>$ per day:</span><span>${ data.perDay }</span></p>    
      <p><span>Start date:</span><span>{ data.started }</span></p>    
      <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>  
      <button onClick={onClick}>Save faster</button> 
      {toggled && <>
        <button>$2</button>
        <button>$5</button>
        <button>$10</button>
      </>} 
      <button>Pause</button>  
    </div>
  )
};

export default Details;