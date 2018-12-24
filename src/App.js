import React from 'react';

import Header from './containers/header.container';
import MainContent from './containers/mainContent.container';
import './App.css';

const App = () => (
    <React.Fragment>
        <Header></Header>
        <MainContent></MainContent>
    </React.Fragment>
);

export default App;