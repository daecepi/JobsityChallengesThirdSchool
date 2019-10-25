/**
 * SEARCHING AND FILTERING BOOKS ACTIONS
 */
//Action for general books searching
export const GET_BOOKS = 'GET_BOOKS';

//Action to find books by city
export const GET_BOOKS_BY_CITY = 'GET_BOOK_CITY';

//Action to find books by the type of the book (hardcover or digital)
export const GET_BOOKS_BY_TYPE = 'GET_BOOKS_TYPE';

//Action to find books by the search field
export const GET_BOOKS_BY_SEARCH = 'GET_BOOKS_SEARCH';


/**
 * GET BOOKS STATES OF THE FETCHING
 */
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';

export const GET_BOOK_PENDING = 'GET_BOOK_PENDING';

export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

/**
 * LENDING ACTIONS
 */
//Action to lend books
export const LEND_BOOK = 'LEND_BOOK';

//Action to return the books lent by an user
export const RETURN_BOOK = 'RETURN_BOOK';

/**
 * AUTHENTICATION ACTIONS
 */
//Action destined to authentica an user that is goind to log in
export const LOGIN_USER = 'LOGIN_USER';

//Action to register an user
export const REGISTER_USER = 'REGISTER_USER';

//Action to recover user data from storage if user didn't closed session
export const RECOVER_USER = 'RECOVER_USER_DATA';