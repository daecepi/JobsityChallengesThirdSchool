import {
  GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  LOGIN_USER,
  LOGOUT_USER,
  MARK_USER_RECOVERY,
  STARTING_BOOK_RENDERING
} from "./actionTypes";

export function getBooksSuccess(books) {
  return {
    type: GET_BOOK_SUCCESS,
    payload: {
      books
    }
  };
}

export function getBooksPending() {
  return {
    type: GET_BOOK_PENDING
  };
}

export function getBooksError(error) {
  return {
    type: GET_BOOKS_ERROR,
    error
  };
}

export function startBookRendering(){
  return {
    type: STARTING_BOOK_RENDERING,
    payload: {
      reRender:true
    }
  }
}

/**
 * ACTION CREATORS FOR USER HANDLING
 */

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
