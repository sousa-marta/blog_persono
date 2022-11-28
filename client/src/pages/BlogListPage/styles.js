import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import { colors } from '../../styles/colors';



export const StyledContainer = styled(Container)`

`;

export const Title = styled.h1`
  margin: 1.2rem 0 1.2rem 0;
  font-size: 1.rem;
`

export const Feedback = styled.div`
  margin: 1.2rem 0 1.2rem 0;
  font-size: 1.2rem;
`

export const PlusIcon = styled.span`
  color: white;
  font-size: 2.2rem;
  padding: 1rem 0;

  &:hover{
    color: ${colors.lightGray};
    cursor: pointer;
  }

`
