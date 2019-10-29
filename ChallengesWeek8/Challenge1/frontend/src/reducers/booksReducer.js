import { GET_BOOK_SUCCESS,
  GET_BOOK_PENDING,
  GET_BOOKS_ERROR,
  LEND_BOOK,
  RETURN_BOOK,
  STARTING_BOOK_RENDERING
} from "../actionTypes/actionTypes";

const initialState = {
  books: [],
  baseEndpoint: "http://localhost:5000/api/books",
  actualPage: 0,
  totalPageCount: 0,
  searchWords: "",
  lendBook: false,
  showModal: "", // make sure to delete if not used
  bookToOperateIn: undefined
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
            pending: false
      });
    case STARTING_BOOK_RENDERING:
      return state;
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
