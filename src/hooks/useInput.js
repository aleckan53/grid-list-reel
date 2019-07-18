import { useState } from 'react';

const useInput = (name='', cb, delay=0) => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [spin, setSpin] = useState(false);

  const onChange = e => {
    setSpin(true);
    clearTimeout(timer);
    const val = e.target.value;
    setValue(e.target.value);
    if(cb) {
      setTimer(setTimeout(() => {
        cb(val);
        setSpin(false);
      }, delay));
    };
  };

  return {
    name,
    value,
    onChange,
    placeholder: name, 
    spin,
  };
};

export default useInput;