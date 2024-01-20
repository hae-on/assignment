import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/order');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <ErrorPageContainer>
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;

  > p {
    margin-bottom: 10px;
  }
`;
