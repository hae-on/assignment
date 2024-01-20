import { styled } from 'styled-components';

import { Logo } from 'src/assets/Icons';

export const HomePage = () => {
  return (
    <HomeContainer>
      <Logo />
      <NavigateButton>주문하러 가기</NavigateButton>
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

const NavigateButton = styled.button`
  width: 172px;
  height: 88px;
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;
