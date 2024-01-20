import { useState } from 'react';
import { styled } from 'styled-components';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (count < 999) setCount((prev) => prev + 1);
  };

  return (
    <CounterButtonContainer>
      <button onClick={handleDecrease}>-</button>
      <Count>{count}</Count>
      <button onClick={handleIncrease}>+</button>
    </CounterButtonContainer>
  );
};

export default CounterButton;

const CounterButtonContainer = styled.div`
  display: flex;
`;

const Count = styled.span`
  width: 26px;
  text-align: center;
`;
