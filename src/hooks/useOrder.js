import { useState } from 'react';

const useOrder = () => {
  const [orderDSC, setOrderDSC] = useState(true);

  return {
    orderDSC, setOrderDSC
  };
};

export default useOrder;