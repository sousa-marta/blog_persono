import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Button = styled.button`
  background: ${colors.darkGray};
  color: white;
  border-radius: 25px;
  border: none;
  padding: 0.35rem 0.9rem;
  margin: 1rem 0;

  &:hover{
    background: ${colors.gray};
  }
`;