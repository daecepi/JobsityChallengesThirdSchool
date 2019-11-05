
/**
 * GET BOOKS STATES OF THE FETCHING
 */
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";

export const GET_BOOK_PENDING = "GET_BOOK_PENDING";

export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

export const PAGE_CHANGE = "PAGE_CHANGE";

export const APPLY_BOOK_CHANGE = "APPLY_BOOK_CHANGE";

/**
 * LENDING ACTIONS
 */
//Action to lend books
export const LEND_BOOK = "LEND_BOOK";

//Action to return the books lent by an user
export const RETURN_BOOK = "RETURN_BOOK";

export const START_RESERVATION_PROCCESS = "START_RESERVATION_PROCCESS";

export const UPDATE_RESERVATION_PROCCESS= "UPDATE_RESERVATION_PROCCESS";

export const FINISH_RESERVATION_PROCCESS = "FINISH_RESERVATION_PROCCESS";

/**
 * AUTHENTICATION/USER ACTIONS
 */
//Action destined to authentica an user that is goind to log in
export const LOGIN_USER = "LOGIN_USER";

//Action to logout user
export const LOGOUT_USER = "LOGOUT_USER";

//Action to recover user data from storage if user didn't closed session
export const MARK_USER_RECOVERY = "MARK_USER_RECOVERY";
