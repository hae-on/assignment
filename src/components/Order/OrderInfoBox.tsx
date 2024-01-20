import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import useOrderInfoValueContext from 'src/hooks/context/useOrderInfoValueContext';

const OrderInfoBox = () => {
  const { totalCount, totalPrice } = useOrderInfoValueContext();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleOrderClick = async () => {
    setIsLoading(true);

    try {
      navigate('/complete');
    } catch (error) {
      navigate('/error');
      throw new Error('주문이 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OrderInfoBoxContainer>
      <OrderInfoWrapper>
        <p>총 수량: {totalCount}개</p>
        <p>총 가격: {totalPrice.toLocaleString()}원</p>
      </OrderInfoWrapper>
      <OrderButton onClick={handleOrderClick} totalCount={totalCount}>
        {isLoading ? '로딩중...' : '주문하기'}
      </OrderButton>
    </OrderInfoBoxContainer>
  );
};

export default OrderInfoBox;

const OrderInfoBoxContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 350px;
  height: 170px;
  padding: 22px;
  background: ${({ theme }) => theme.backgroundColors.default};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.large};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > p {
    margin-bottom: 5px;
  }
`;

const OrderButton = styled.button<{ totalCount: number }>`
  width: 100%;
  height: 48px;
  margin-top: 18px;
  background: ${({ totalCount, theme }) => (totalCount > 0 ? theme.colors.black : theme.colors.gray1)};
  color: ${({ theme }) => theme.textColors.light};
`;
