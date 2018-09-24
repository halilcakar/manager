import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {

    componentWillMount() {
        // open a firebase database and get config here
        const config = {};
        // change config before you initialize
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
