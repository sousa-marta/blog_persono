import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const SearchBarStyle = styled.div`

  position: relative;

  .tag-right{
    position: absolute;
    top: -4px;
    right: 10px;
    font-size: 13px;
  }

}
`

export const InputStyle = styled(Form.Control)`
  border-radius: 0.7rem !important;
  padding: 0.7rem 0 0.7rem 1.2rem !important;
  font-size: 1.2rem;
`;
