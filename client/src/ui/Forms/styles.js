import styled from 'styled-components';
import { colors } from '../../styles/colors';
import Form from 'react-bootstrap/Form';

// export const FormStyle = styled.div`
//   .modal-content {
//     background: ${colors.darkGray} !important;
//   }

// `;

export const InputStyle = styled(Form.Control)`
  border-radius: 0.7rem !important;
  padding: 0.7rem 0 0.7rem 1.2rem !important;
  font-size: 1.2rem;
`;


export const Error = styled.div`
  color: ${colors.error};
  margin: 0;
`;
