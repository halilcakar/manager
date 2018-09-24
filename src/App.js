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
        const config = {
            apiKey: 'AIzaSyCfnADSqfZPgF8oeW5g-oELPwy4yJax618',
            authDomain: 'manager-3120b.firebaseapp.com',
            databaseURL: 'https://manager-3120b.firebaseio.com',
            projectId: 'manager-3120b',
            storageBucket: 'manager-3120b.appspot.com',
            messagingSenderId: '248373318619'
        };
        // Change config's to ur's before initialize project
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
