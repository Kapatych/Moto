import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import './index.css'

import App from './components/app/App';
import Error from "./components/error/error";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Error>
            <HashRouter>
                <App/>
            </HashRouter>
        </Error>
    </Provider>
    , document.getElementById('root')
);

window.store = store;
