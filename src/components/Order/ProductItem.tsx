import { useState } from 'react';
import { styled } from 'styled-components';

import useOrderInfoActionContext from 'src/hooks/context/useOrderInfoActionContext';
import useOrderInfoValueContext from 'src/hooks/context/useOrderInfoValueContext';
import type { Product } from 'src/types/product';

import Badge from '../Common/Badge';
import CounterButton from '../Common/CounterButton';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { totalCount, totalPrice } = useOrderInfoValueContext();
  const { setTotalCount, setTotalPrice } = useOrderInfoActionContext();

  const { name, event, price } = product;

  const [count, setCount] = useState(0);

  const handleCountChange = (newCount: number) => {
    const diff = newCount - count;
    setCount(newCount);
    setTotalCount(totalCount + diff);
    setTotalPrice(totalPrice + diff * price);
  };

  return (
    <ProductItemContainer>
      <ProductImage />
      <ProductWrapper>
        <ProductTopWrapper>
          <span>{name}</span>
          {event > 0 && <Badge label="이벤트" />}
        </ProductTopWrapper>
        <ProductBottomWrapper>
          <CounterButton count={count} onCount={handleCountChange} />
          <span>{price.toLocaleString()}원</span>
        </ProductBottomWrapper>
      </ProductWrapper>
    </ProductItemContainer>
  );
};

export default ProductItem;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin: 18px 0;
  padding: 9px;
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const ProductImage = styled.div`
  width: 62px;
  height: 62px;
  background: ${({ theme }) => theme.colors.gray};
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProductTopWrapper = styled.div`
  display: flex;

  > span {
    margin-right: 10px;
  }
`;

const ProductBottomWrapper = styled.div`
  display: flex;

  > span {
    margin-left: 60px;
  }
`;
