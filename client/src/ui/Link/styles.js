import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Link = styled.span`
  color: white;
  padding: 0 0.3rem;
  font-size: 1.3rem;

  &:hover{
    color: ${colors.lightGray};
    cursor: pointer;
    font-weight:bold;
  }
`;


