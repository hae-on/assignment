import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <DefaultLayoutContainer>
      <MainWrapper id="main">{children}</MainWrapper>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;

const DefaultLayoutContainer = styled.div`
  height: 864px;
  max-width: 350px;
  margin: 0 auto;
  background: ${({ theme }) => theme.backgroundColors.default};
`;

const MainWrapper = styled.main`
  position: relative;
  height: 100%;
  padding: 24px;
  overflow-x: hidden;
  overflow-y: auto;
`;
