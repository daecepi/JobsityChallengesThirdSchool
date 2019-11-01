import { GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  LEND_BOOK,
  RETURN_BOOK,
  PAGE_CHANGE,
  START_RESERVATION_PROCCESS,
  UPDATE_RESERVATION_PROCCESS,
  FINISH_RESERVATION_PROCCESS
} from "../actionTypes/actionTypes";

const initialState = {
  books: [],
  baseEndpoint: "http://localhost:5000/api/books",
  actualPage: 0,
  totalPageCount: 0,
  searchWords: "",
  urlFilters: "/",
  resource: "/",
  lendBook: false,
  showModal: "", // make sure to delete if not used
  bookToOperateIn: undefined,
  bookId: undefined,
  startDate: undefined,
  endDate: undefined,
  isReservationProcessStarted: false,
};

const books = (state = initialState, action) => {
  //Logic for the user
  switch (action.type) {
    case GET_BOOK_PENDING:
      return Object.assign({}, state, {
        pending: true
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
    case PAGE_CHANGE: //MOFIIGING
      return Object.assign({}, state, {
        actualPage: action.payload.pageNum
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
    case LEND_BOOK:
      return state.books.id=== action.id? Object.assign({}, state, {
                reserved: true
              }): state;
    case RETURN_BOOK:
      return Object.assign({}, state, {
        pending: true
      });
    default:
      return state;
  }
};

export default books;
