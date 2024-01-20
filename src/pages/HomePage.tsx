import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Logo } from 'src/assets/Icons';
import { PATH } from 'src/constants/path';

export const HomePage = () => {
  return (
    <HomeContainer>
      <Logo />
      <OrderPageLink to={PATH.ORDER}>주문하러 가기</OrderPageLink>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColors.dark};
`;

const OrderPageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 88px;
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;
