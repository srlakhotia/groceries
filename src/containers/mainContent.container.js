import React from 'react';
import propTypes from 'prop-types';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home.container';


function MainContent (props) {
    return (
        <Router>
            <Route exact path="/" render={() => <Home></Home>} />
        </Router>
    )
}

export default MainContent;