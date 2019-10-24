import { GET_BOOK_SUCCESS, GET_BOOK_PENDING, GET_BOOKS_ERROR } from '../actions/actionTypes';


const initialState = {
    bookToWork: "",
    books: []
}

const reducer = (state = initialState, action) => {
    console.log(action);
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
        default:
            return state;
    }
}

export default reducer;