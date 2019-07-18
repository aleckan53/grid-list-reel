import { useState } from 'react';

const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const onClick = () => {
    setToggled(!toggled);
  };

  return {
    toggled, onClick
  };
};

export default useToggle;