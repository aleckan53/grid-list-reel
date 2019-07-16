import { useState } from 'react';

export const useInput = (text, cb, delay=600) => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(null);

  const onChange = e => {
    clearTimeout(timer);
    const term = e.target.value;
    setValue(term);
    
    if(cb) {
      setTimer(setTimeout(() => {
        cb(value);
      }, delay));
    };
  };

  return {
    text, value, onChange, placeholder: text,
  };
};