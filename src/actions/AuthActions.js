import firebase from '@firebase/app';
import '@firebase/auth';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (pass) => {
    return {
        type: PASSWORD_CHANGED,
        payload: pass
    };
};
export const loginUser = ({ email, password }) => {
    return (dispacth) => {
        dispacth({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispacth, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispacth, user))
                    .catch(() => loginUserFail(dispacth));
            });
    };
};
const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};
const loginUserSuccess = (dispacth, user) => {
    dispacth({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.main();
};