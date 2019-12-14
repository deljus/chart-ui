import React from 'react';
import { Grid, List, UserCard } from '../components';
import styled from 'styled-components';

const Sider = styled(Grid.Column)`
  border-right: 1px solid #abb2b5;
  background-color: #f3f7fb;
  margin-right: 10px;
  box-shadow: 6px 8px 20px -5px rgba(0,0,0,0.21);
`;

const ChartPage = () => (
    <Grid.Row>
        <Sider width={300}>
            <List items={[{ name: 'Del' }, { name: 'Lilit' }]} render={UserCard} />
        </Sider>
        <Grid.Column span={1}>
            dfvdfvdfv
        </Grid.Column>
    </Grid.Row>
);

export default ChartPage;
