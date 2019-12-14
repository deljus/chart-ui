import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import { Layout, Header } from './components';
import { ChartPage } from './pages';

const App = () => (
    <Layout>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ChartPage}/>
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default App;
