import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from 'src/constants/path';

const NotFoundPage = () => {
  return (
    <NotFoundSection>
      <NotFoundTitle>존재하지 않는 페이지입니다</NotFoundTitle>
      <HomePageLink to={PATH.HOME}>홈으로 가기</HomePageLink>
    </NotFoundSection>
  );
};

export default NotFoundPage;

const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const NotFoundTitle = styled.h1`
  margin-bottom: 30px;
`;

const HomePageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 88px;
  margin-top: 40px;
  background: ${({ theme }) => theme.backgroundColors.dark};
  color: ${({ theme }) => theme.textColors.light};
  font-size: 25px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;
