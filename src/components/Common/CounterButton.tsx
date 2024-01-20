import { useState } from 'react';
import { styled } from 'styled-components';

interface CounterButtonProps {
  count: number;
  onCount: (count: number) => void;
}

const CounterButton = ({ count, onCount }: CounterButtonProps) => {
  const handleDecrease = () => {
    if (count > 0) {
      onCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < 999) {
      onCount(count + 1);
    }
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
