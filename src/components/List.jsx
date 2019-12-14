import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = ({ items, render }) => (
    <Container>{ items.map(render) }</Container>
);

export default List;
