import React, { useContext } from 'react';
import { useToggle, useInput } from 'hooks';
import Range from './Range';

import DataContext from 'context/DataContext';
import { 
  IoMdOptions as Options,
  IoMdPause as Pause,
  IoMdPlay as Start,
} from 'react-icons/io';

const Details = ({ data, classes }) => {

  const { "data-toggle": toggled, onClick } = useToggle();
  const handleInput = useInput();

  const { container, controls } = classes;
  const { updateItem } = useContext(DataContext);

  return (
    <div className={container}>
      <p><span>Days left:</span><span>{ 12 }</span></p>  
      <p><span>$ per day:</span><span>${ handleInput.value || data.perDay }</span></p>    
      <p><span>Start date:</span><span>{ data.started }</span></p>    
      <p><span>Estimated finsh date:</span><span>{ data.started }</span></p>  
      <div className={controls}>
        {toggled 
          ? <Range perDay={data.perDay} id={data.id} handleInput={handleInput} onClick={onClick}/> 
          : <>
            <button onClick={onClick}><Options/><span>Save faster</span></button>
            <button 
              onClick={() => updateItem(data.id, 'status', data.status === 'active' ? 'paused' : 'active')}>
              {data.status !== 'active'
                ? <><Start/><span>Restart</span></>
                : <><Pause/><span>Pause</span></>}
            </button>  
          </>} 
      </div>
    </div>
  )
};

export default Details;