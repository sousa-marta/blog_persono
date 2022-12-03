import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { LoaderPosition } from './styles';

const Loading = () => {
  return (
    <LoaderPosition>
      <Spinner animation="grow" size="lg" />
    </LoaderPosition>
  );
};

export default Loading;
