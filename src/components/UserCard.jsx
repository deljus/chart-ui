import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 80px;
  padding: 0 10px;
  cursor: pointer;
  &:hover{
    background-color: #abb2b5;
  };
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;



const UserCard = ({ name }) => (
    <Container>
        <Avatar text={name}/>
        <TextContainer>
            <h4>{ name }</h4>
        </TextContainer>
    </Container>
);

export default UserCard;
