import { useState } from 'react';

const useInput = (name='', cb, delay=0) => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(null);

  const onChange = e => {
    clearTimeout(timer);
    const val = e.target.value;
    setValue(e.target.value);
    if(cb) {
      setTimer(setTimeout(() => {
        cb(val);
      }, delay));
    };
  };

  return {
    name, value, onChange, placeholder: name,
  };
};

export default useInput;