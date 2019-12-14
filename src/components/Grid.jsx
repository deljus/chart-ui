import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.span ? props.span : 'unset'};
  width: ${(props) => props.width ? props.width + 'px' : 'auto'};
`;

export default { Row, Column }
