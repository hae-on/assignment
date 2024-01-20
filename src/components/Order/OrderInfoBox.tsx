import { styled } from 'styled-components';

const OrderInfoBox = () => {
  return (
    <OrderInfoBoxContainer>
      <OrderInfoWrapper>
        <p>총 수량: 0개</p>
        <p>총 가격: 0원</p>
      </OrderInfoWrapper>
      <OrderButton>주문하기</OrderButton>
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
  float: right;

  > p {
    margin-bottom: 5px;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 18px;
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.textColors.light};
`;
