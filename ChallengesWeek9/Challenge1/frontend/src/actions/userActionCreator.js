
/**
 * ACTION CREATORS FOR USER HANDLING
 */

import {
  LOGIN_USER,
  LOGOUT_USER,
  MARK_USER_RECOVERY
} from '../actionTypes/actionTypes';

/**
 * Action creator to log a user
 * @param {*} user : contains the user logged in
 */
export function loginUser(user) {
    return {
      type: LOGIN_USER,
      payload: {
        user
      }
    };
  }
  
/**
 * Action to logout a user from the entire app
 */
export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}

/**
 * Disable the flag that controls the initial recovery of the user data
 */
export function markUseRecovery() {
    return {
        type: MARK_USER_RECOVERY
    };
}
  