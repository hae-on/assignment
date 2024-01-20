import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { CheckIcon } from 'src/assets/Icons';
import { PATH } from 'src/constants/path';

export const CompletePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(PATH.ORDER);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <CompletePageContainer>
      <CheckIcon />
      <p>주문이 완료되었습니다.</p>
    </CompletePageContainer>
  );
};

export default CompletePage;

const CompletePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;

  > p {
    margin-top: 10px;
  }
`;
