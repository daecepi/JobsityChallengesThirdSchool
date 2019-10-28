import {
    LOGIN_USER,
    LOGOUT_USER,
    RECOVER_USER
} from '../actions/actionTypes';

const initialState = {
    userIsLogged: false,
    userLogged: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                userIsLogged: true,
                userLogged: action.payload.user
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                userIsLogged: false,
                userLogged: {}
            });
        case RECOVER_USER:
            return Object.assign({}, state, {
                userIsLogged: true,
                userLogged: action.payload.user
            });
        default:
            return state;
    }
}

export default user;