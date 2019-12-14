import React from 'react';
import styled from 'styled-components';

const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    background-color: #e8eaf0;
    font-family: Gill Sans Extrabold, sans-serif;
`;

const Layout = styled.div`
    display: flex;
    min-width: 1200px;
    flex-direction: column;
`;

export default ({ children }) => (
    <BaseLayout>
        <Layout>{ children }</Layout>
    </BaseLayout>
)
