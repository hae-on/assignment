import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

interface OrderInfoValue {
  totalCount: number;
  totalPrice: number;
}

interface OrderInfoAction {
  setTotalCount: (count: number) => void;
  setTotalPrice: (price: number) => void;
}

export const OrderInfoValueContext = createContext<OrderInfoValue | null>(null);
export const OrderInfoActionContext = createContext<OrderInfoAction | null>(null);

const OrderInfoProvider = ({ children }: PropsWithChildren) => {
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const orderInfoValue = {
    totalCount,
    totalPrice,
  };

  const orderInfoAction = {
    setTotalCount,
    setTotalPrice,
  };

  return (
    <OrderInfoActionContext.Provider value={orderInfoAction}>
      <OrderInfoValueContext.Provider value={orderInfoValue}>{children}</OrderInfoValueContext.Provider>
    </OrderInfoActionContext.Provider>
  );
};

export default OrderInfoProvider;
