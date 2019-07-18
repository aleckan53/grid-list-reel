import { useState, useContext, useEffect } from 'react';
import DataContext from 'context/DataContext';


const useToggle = (collapse=true) => {
  const { searchTerm, sortType, orderDSC } = useContext(DataContext);
  const [toggled, setToggled] = useState(false);

  const onClick = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    if(collapse) {
      setToggled(false);
    }
  }, [searchTerm, sortType, orderDSC])

  return {
    toggled, onClick
  };
};

export default useToggle;