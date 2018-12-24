import React from 'react';

import Header from './containers/header.container';
import MainContent from './containers/mainContent.container';
import './App.css';

const App = (props) => (
    <React.Fragment>
        <Header {...props}></Header>
        <MainContent {...props}></MainContent>
    </React.Fragment>
);

export default App;