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

const initialState = {
  books: [],
  baseEndpoint: "http://localhost:5000/api",
  actualPage: 0,
  totalPageCount: 0,
  searchWords: "",
  wordsChanged: false,
  searchbyWordsDeploy: false,
  urlFilters: "/",
  resource: "/",
  bookId: undefined,
  startDate: undefined,
  endDate: undefined,
  isReservationProcessStarted: false
};

const books = (state = initialState, action) => {
  //Logic for the user
  switch (action.type) {
    case GET_BOOK_PENDING:
      return Object.assign({}, state, {
        pending: true,
        wordsChanged: false,
        searchbyWordsDeploy: false
      });
    case GET_BOOKS_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error,
        pending: false
      });
    case GET_BOOK_SUCCESS:
      return Object.assign({}, state, {
        books: action.payload.books,
        pending: false,
        actualPage: action.payload.actualPage,
        totalPageCount: action.payload.totalPageCount,
        resource: action.payload.resource
      });
    case PAGE_CHANGE: //modifying
      return Object.assign({}, state, {
        actualPage: action.payload.pageNum
      });

    case APPLY_BOOK_CHANGE:
      let booksUpdated = state.books.map((book) => {
        if (book._id === action.payload.bookId) return action.payload.book;
        return book;
      });
      return Object.assign({}, state, {
        books: booksUpdated
      });

    case PREPARE_BOOKS_SEARCHING:
      return Object.assign({}, state, {
        searchWords: action.payload.words,
        wordsChanged: true
      });

    case DEPLOY_SEARCHES_BY_BOOK:
      return Object.assign({}, state, {
        searchbyWordsDeploy: true
      });

    case START_RESERVATION_PROCCESS:
      return Object.assign({}, state, {
        bookId: action.payload.bookId,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        isReservationProcessStarted: true
      });

    case UPDATE_RESERVATION_PROCCESS:
      return Object.assign({}, state, {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      });

    case FINISH_RESERVATION_PROCCESS:
      return Object.assign({}, state, {
        bookId: undefined,
        startDate: undefined,
        endDate: undefined,
        isReservationProcessStarted: false
      });
    default:
      return state;
  }
};

export default books;
