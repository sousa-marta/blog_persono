import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Card = styled.div`
  background: ${colors.gray};
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0;
`;

export const Subtitle = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  line-height: 1.2rem;
`;