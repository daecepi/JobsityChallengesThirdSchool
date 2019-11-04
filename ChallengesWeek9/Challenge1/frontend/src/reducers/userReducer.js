import { LOGIN_USER, LOGOUT_USER, MARK_USER_RECOVERY } from "../actionTypes/actionTypes";

const initialState = {
  userIsLogged: false,
  userRecoveryTried: false,
  userLogged: {}
};

const user = (state = initialState, action) => {
  console.log(action);
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
    case MARK_USER_RECOVERY: //Only triggered once in the application
      return Object.assign({}, state, {
        userRecoveryTried: true
      });
    default:
      return state;
  }
};

export default user;
