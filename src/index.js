import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import reducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import FormAuth from './components/FormAuth';
import FormReg from './components/FormReg';
import ProfileContainer from './containers/ProfileContainer';

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}
const store = createStore(reducer, applyMiddleware(...middleware));

const routes = (
    <Route path='/' component={App}>
        <Route path='/signin' component={FormAuth} />
        <Route path='/signup' component={FormReg} />
        <Route path='/profile' component={ProfileContainer} />
    </Route>
)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
