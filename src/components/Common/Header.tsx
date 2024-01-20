import { styled } from 'styled-components';

import { DefaultLogo } from 'src/assets/Icons';

const Header = () => {
  return (
    <HeaderContainer>
      <DefaultLogo />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 350px;
  height: 57px;
  padding-left: 12px;
  background: ${({ theme }) => theme.backgroundColors.dark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
