import { useState, useContext, useEffect } from 'react';
import DataContext from 'context/DataContext';


const useToggle = (collapse=true) => {
  const context = useContext(DataContext);
  const [toggled, setToggled] = useState(false);

  const onClick = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    if(collapse) {
      setToggled(false);
    }
  }, [context.searchTerm, context.sortType, context.orderDSC])

  return {
    toggled, onClick
  };
};

export default useToggle;