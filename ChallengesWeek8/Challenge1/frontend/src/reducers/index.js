import { GET_BOOK_SUCCESS, GET_BOOK_PENDING, GET_BOOKS_ERROR, LEND_BOOK, RETURN_BOOK } from '../actions/actionTypes';


const initialState = {
    bookToWork: "",
    books: [],
    resource: "",
}

const reducer = (state = initialState, action) => {
    console.log("Revisa aqui");
    console.log(action.type);
    //Logic for the user
    switch (action.type) {
        case GET_BOOK_PENDING:
            console.log("in book pending")
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
        case LEND_BOOK:
            return state;
        case RETURN_BOOK:
            return Object.assign({}, state,{
                pending: true
            });
        default:
            return state;
    }
}

export default reducer;