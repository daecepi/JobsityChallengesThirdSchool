import {
    GET_BOOK_SUCCESS,
    GET_BOOK_PENDING,
    GET_BOOKS_ERROR,
    LEND_BOOK,
    RETURN_BOOK,
    RECOVER_USER
} from '../actions/actionTypes';


const initialState = {
    auth: {
        isAuth: false,
        user: {},
    },
    books: [],
    baseEndpoint: "http://localhost:5000/books",
    actualPage: 0,
    totalPageCount: 0,
    searchWords: "",
    lendBook: false,
    showModal: "", // make sure to delete if not used
    bookToOperateIn: undefined
}

const reducer = (state = initialState, action) => {
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
        
        case RECOVER_USER:
            return Object.assign({}, state,{
                auth: {
                    user: action.payload.user
                }
            });
        default:
            return state;
    }
}

export default reducer;