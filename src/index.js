
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import tasks from './reducers';
import App from './App';

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // options like actionSanitizer, stateSanitizer
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    tasks, // reducers,
    {},
    enhancer
);

render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById('root')
);