import {
  GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  PAGE_CHANGE,
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


export function pageChange(num){
  return {
    type: PAGE_CHANGE,
    payload: {
      pageNumber: num
    }
  }
}


/**
 * FUNCTION TO START A RESERVATION PROCCESS
 */
export function startReservationProccess(bookId, startDate,endDate) {
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
 * FUNCTIONS FOR THE RESERVATION PROCCESS
 */
export function updateReservationInfo(startDate, endDate){
  return {
    type: UPDATE_RESERVATION_PROCCESS,
    payload: {
      startDate,
      endDate
    }
  };
}

export function finishReservationProccess(){
  return {
    type: FINISH_RESERVATION_PROCCESS
  };
}

