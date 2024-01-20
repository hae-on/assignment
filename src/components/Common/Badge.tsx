import { styled } from 'styled-components';

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return <BadgeContainer>{label}</BadgeContainer>;
};

export default Badge;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 23px;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.textColors.light};
  font-size: 13px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;
