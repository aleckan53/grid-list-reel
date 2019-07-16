import { useState } from 'react';

export const useInput = (name, cb, delay=600) => {
  const [timer, setTimer] = useState(null);

  const onChange = e => {
    clearTimeout(timer);
    const term = e.target.value;

    if(cb) {
      setTimer(setTimeout(() => {
        cb(term);
      }, delay));
    };
  };

  return {
    name, onChange, placeholder: name,
  };
};