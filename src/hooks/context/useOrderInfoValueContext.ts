import { useContext } from 'react';

import { OrderInfoValueContext } from 'src/context/OrderInfoContext';

const useOrderInfoValueContext = () => {
  const orderInfoValue = useContext(OrderInfoValueContext);
  if (orderInfoValue === null || orderInfoValue === undefined) {
    throw new Error('useOrderInfoValueContext는 OrderInfo Provider 안에서 사용해야 합니다.');
  }

  return orderInfoValue;
};

export default useOrderInfoValueContext;
