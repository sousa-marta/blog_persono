import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Button = styled.span`
  background: ${colors.darkGray};
  color: white;
  border-radius: 25px;
  border: none;
  padding: 0.35rem 0.9rem;
  margin: 1rem 0;

  &:hover{
    background: ${colors.gray};
    cursor: pointer;
  }
`;

export const InputButton = styled.input`
  background: ${colors.gray};
  color: white !important;
  border-radius: 0.375rem;
  border: none;
  padding: 0.35rem 0.9rem;
  margin: 1rem 0;

  &:hover{
    background: ${colors.lightGray};
    color:  ${colors.darkestGray} !important;
    cursor: pointer;
  }
`;