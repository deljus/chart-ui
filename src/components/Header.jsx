import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 70px;
    justify-content: space-between;
    background-color: #008390;
    box-shadow: 6px 8px 20px -5px rgba(0,0,0,0.21);
    margin-bottom: 10px;
`;

const LogoContainer = styled.div`
    
`;

const ExtraContainer = styled.div`

`;

const Header = ({ logo, extra }) => (
    <Container>
        <LogoContainer>
            {logo}
        </LogoContainer>
        <ExtraContainer>
            {extra}
        </ExtraContainer>
    </Container>
);

export default Header;
