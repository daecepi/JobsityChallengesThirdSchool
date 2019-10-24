

import { GET_BOOK_SUCCESS, GET_BOOK_PENDING, GET_BOOKS_ERROR } from './actionTypes'

export const getBooks = (endpoint, page, ...filters) => {
    return dispatch =>{
        let url = endpoint+"?page="+page;

        if(filters.city){
            url += ("&city="+filters.city);
        }
        if(filters.type){
            url += ("&type="+filters.type);
        }
        if (filters.words) {
            url += ("&words="+filters.words);
        }

        console.log("added");
        console.log(url);

        let token = localStorage.getItem("access_token");

        dispatch(getBooksPending);
        fetch(url, {
                method: "GET",
                headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => res.json()).then((books) => {
            dispatch(getBooksSuccess(books));
        }).catch((err) => {
            dispatch(getBooksError(err));
        });

        console.log("Inside ation creator");
    }
};

export const getBooksSuccess = (books) => {
    return {
        type: GET_BOOK_SUCCESS,
        payload: {
            books
        }
    }
}

export const getBooksPending = () => {
    return {
        type: GET_BOOK_PENDING
    }
}

export const getBooksError = (error) => {
    return {
        type: GET_BOOKS_ERROR,
        error

    }
}