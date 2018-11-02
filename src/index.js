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
import AuthContainer from './containers/AuthContainer';
import RegContainer from './containers/RegContainer';
import ProfileContainer from './containers/ProfileContainer';
import TasksContainer from './containers/TasksContainer';

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}
const store = createStore(reducer, applyMiddleware(...middleware));

const routes = (
    <Route path='/'  component={App}>
        <Route path='/signin' component={AuthContainer} />
        <Route path='/signup' component={RegContainer} />
        <Route path='/profile' component={ProfileContainer} />
        <Route path='/tasks' component={TasksContainer} />
    </Route>
)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
