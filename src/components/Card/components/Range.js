import React, { useContext } from 'react';
import { IoMdClose as Cancel } from 'react-icons/io';
import DataContext from 'context/DataContext';

const Range = ({ perDay, id, onClick, handleInput }) => {
  const context = useContext(DataContext);

  const { onChange, value } = handleInput;

  const max = Math.floor(perDay * 2);
  const min = Math.floor(perDay / 2);

  const handleConfirm = () => {
    onClick();
    context.updateItem(id, 'perDay', handleInput.value);
  };
 
  return (
    <div data-name='range'>
      <input 
        defaultValue={perDay}
        type='range' 
        min={min ? min : 1} 
        max={max} 
        onInput={onChange}/>
      <button onClick={handleConfirm}><span>${ value || perDay }</span></button>
      <button onClick={onClick}><Cancel/></button>
    </div>
  );
};

export default Range;