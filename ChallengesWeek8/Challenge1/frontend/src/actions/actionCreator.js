

import { GET_BOOK_SUCCESS, GET_BOOK_PENDING, GET_BOOKS_ERROR } from './actionTypes'

/*export const getBooks = () => {
        /et url = endpoint+"?page="+page;

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

        //Getting token
        let token = localStorage.getItem("access_token");

        //dispatch(getBooksPending);
        fetch("http://localhost:5000/books", {
                method: "GET",
                headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => res.json()).then((books) => {
            //dispatch(getBooksSuccess(books));
        }).catch((err) => {
            //dispatch(getBooksError(err));
        });

        console.log("Inside ation creator");
    
};*/

export function getBooksSuccess (books) {
    console.log(books);
    return {
        type: GET_BOOK_SUCCESS,
        payload: {
            books
        }
    }
}

export function getBooksPending () {
    console.log("pensding");
    return {
        type: GET_BOOK_PENDING
    }
}

export function getBooksError (error) {
    return {
        type: GET_BOOKS_ERROR,
        error

    }
}