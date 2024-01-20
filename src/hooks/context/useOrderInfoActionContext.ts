import { useContext } from 'react';

import { OrderInfoActionContext } from 'src/context/OrderInfoContext';

const useOrderInfoActionContext = () => {
  const orderInfoAction = useContext(OrderInfoActionContext);
  if (orderInfoAction === null || orderInfoAction === undefined) {
    throw new Error('useOrderInfoActionContext는 OrderInfo Provider 안에서 사용해야 합니다.');
  }

  return orderInfoAction;
};

export default useOrderInfoActionContext;
