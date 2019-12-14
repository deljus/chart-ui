import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 40px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  border: 3px solid #575b57;
  color: #575b57;
`;

const Avatar = ({ text }) => (
    <Container>
        { text[0] }
    </Container>
);

export default Avatar;
