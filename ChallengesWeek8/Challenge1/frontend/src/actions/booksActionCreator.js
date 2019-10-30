import {
  GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  PAGE_CHANGE,
  UPDATE_RESERVATION_PROCCESS,
} from "../actionTypes/actionTypes";

export function getBooksSuccess(books, actualPage, totalPageCount, urlFilters) {
  return {
    type: GET_BOOK_SUCCESS,
    payload: {
      books,
      actualPage,
      totalPageCount,
      urlFilters
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


export function pageChange(num){
  return {
    type: PAGE_CHANGE,
    payload: {
      pageNumber: num
    }

  }
}

/**
 * FUNCTIONS FOR THE RESERVATION PROCCESS
 */
export function prepareReservationProccess(startDate, returnDate){
  return {
    type: UPDATE_RESERVATION_PROCCESS,
    payload: {
      startDate,
      returnDate
    }
  }
}


