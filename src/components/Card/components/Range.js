import React from 'react';

const Range = ({ perDay, className, onClick, handleInput }) => {

  const { value, onChange } = handleInput;

  return (
    <div className={className}>
      <span>${ value || perDay }</span>
      <input 
        defaultValue={perDay}
        type='range' 
        min={perDay} 
        max={perDay*2} 
        onInput={onChange}/>
        <button onClick={onClick}>V</button>
        <button onClick={onClick}>X</button>
    </div>
  );
};

export default Range;