import {
  GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  PAGE_CHANGE,
  APPLY_BOOK_CHANGE,
  PREPARE_BOOKS_SEARCHING,
  DEPLOY_SEARCHES_BY_BOOK,
  START_RESERVATION_PROCCESS,
  UPDATE_RESERVATION_PROCCESS,
  FINISH_RESERVATION_PROCCESS
} from "../actionTypes/actionTypes";

export function getBooksSuccess(books, actualPage, totalPageCount, urlFilters, resource) {
  return {
    type: GET_BOOK_SUCCESS,
    payload: {
      books,
      actualPage,
      totalPageCount,
      urlFilters,
      resource
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

export function pageChange(num) {
  return {
    type: PAGE_CHANGE,
    payload: {
      pageNumber: num
    }
  };
}

export function applyBookupdate(bookId, book) {
  return {
    type: APPLY_BOOK_CHANGE,
    payload: {
      bookId,
      book
    }
  };
}

/**
 * Function that creates the action that sets the words to look for by title
 * @param {string} words : words to look for in books title
 */
export function prepareSearchByWords(words) {
  return {
    type: PREPARE_BOOKS_SEARCHING,
    payload: {
      words
    }
  };
}

/**
 * Function that creates the action when words were finished written
 */
export function deploySearchByWords() {
  return {
    type: DEPLOY_SEARCHES_BY_BOOK
  };
}

/**
 * Function that starts the action of setting the base values for the reservation
 * proccess, being important on this the book's id
 */
export function startReservationProccess(bookId, startDate, endDate) {
  return {
    type: START_RESERVATION_PROCCESS,
    payload: {
      bookId,
      startDate,
      endDate
    }
  };
}

/**
 * Function that start the action for updating the reservation dates
 * where was needed
 */
export function updateReservationInfo(startDate, endDate) {
  return {
    type: UPDATE_RESERVATION_PROCCESS,
    payload: {
      startDate,
      endDate
    }
  };
}

/**
 * Function that start the action for reseting all changes in redux variables
 * for reservation proccess
 */
export function finishReservationProccess() {
  return {
    type: FINISH_RESERVATION_PROCCESS
  };
}
