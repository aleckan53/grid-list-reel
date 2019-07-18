import React, { useContext } from 'react';
import { IoMdCheckmark as Confirm, IoMdClose as Cancel } from 'react-icons/io';
import DataContext from 'context/DataContext';

const Range = ({ perDay, id, onClick, handleInput }) => {
  const context = useContext(DataContext);

  const { onChange } = handleInput;

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
        min={min} 
        max={max} 
        onInput={onChange}/>
      <button onClick={handleConfirm}><Confirm/></button>
      <button onClick={onClick}><Cancel/></button>
    </div>
  );
};

export default Range;