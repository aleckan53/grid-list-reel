import { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    console.log(toggle)
    setToggle(!toggle);
  };

  return {
    'data-toggle': toggle, onClick
  };
};

export default useToggle;