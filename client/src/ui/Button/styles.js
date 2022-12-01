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
  background: ${colors.button};
  color: white !important;
  border-radius: 30px;
  border: none;
  padding: 0.5rem 1.2rem;
  margin: 1rem 0;
  font-family: 'LatoSemiBold', Arial, sans-serif;

  &:hover{
    background: ${colors.buttonHover};
    cursor: pointer;
  }
`;