/**
 * IMPORTANT
 * This controller have been based on Google's API url structures
 */
let fetch = require('node-fetch');

/**
 * Section of Controller functions
 */

/**
 * This function manages the recolection of books from an API even when has a limit of a number of books per request
 * @param {String} url : contains the API url where the books are
 * @param {Number} booksToGet : contains the number of books to get
 * @param {String} category : contains the API url where the books are
 * @param {String} postr : contains the API url where the books are
 * @param {List} properties : OPTIONAL: If you want to filter the params inmediately
 */
const searchBooksRated = async (baseURL, category, booksToGet, posstr, properties) => {
    let count = 0;
    let books = [];
    //
    while (count < booksToGet) {
        let partialBooks = await resolveBooks(baseURL, count, category, booksToGet, posstr, properties);
        count += partialBooks.count;
        books = books.concat(partialBooks.books);
        console.log(books.length);
    }


    return books;
};

/**
 * gets books that are rated according to a filter gotten in certain part of the code
 * @param {String} baseURL : contains the API url where the books are
 * @param {Number} baseCount : The amount of registers retrieved until now
 * @param {Number} booksToGet : contains the number of books to get
 * @param {String} category : contains the API url where the books are
 * @param {String} postr : contains the API url where the books are
 * @param {List} properties : OPTIONAL: If you want to filter the fields wanted and no need to review another link is necesary
 */
const resolveBooks = async (baseURL, baseCount, category, booksToGet, posstr, properties) => {
    if (!baseURL && !category) {
        let error = {}
        error['Error'] = "function call not correct";
        return error;
    }
    //Building the url to pass to API: the baseURl+categor
    let finalURL = `${baseURL}${( category || "" )}${(posstr ? posstr+baseCount : "" )}`;

    //Returns promise from fetch
    let results = await fetch(finalURL).then(res => res.json());
    
    /*
    Filtering the books that we want base of some logic: initially was to get the book if had rating
    But for brevity just going to get the books number and then get the design
    */

    let bookCounter = baseCount;
    let booksSelected = [];

    for (let index = 0; index < results.items.length; index++) {
        if (bookCounter === booksToGet) {
            break;
        }
        try {
            if (properties) {
                let book = {};
                for (let j = 0; j < properties.length; j++) {
                    let property = properties[j];
                    book[property] = results.items[index].volumeInfo[property];
                }
                //CODE JUST FOR THE PURPOSE OF THE EXERCISE
                if(book['averageRating'] === undefined){
                    book['averageRating'] = 0;
                }
                booksSelected.push(book);
                bookCounter++;
            }else{//Means that the client wants the selflink info where more information can be found
                booksSelected.push({selfLink: results.items[index].selfLink});
                bookCounter++;
            }
        } catch (error) {//Means that the book does not have a volumeInfo property still
            continue;
        }
    }
    //returning the state of the search and the new books
    return {count: booksSelected.length, books: booksSelected};
};

/**
 * 
 * @param {*} books 
 * @param {*} properties 
 */
const resolveBooksInfo = async (books, properties) => {
    for (let index = 0; index < books.length; index++) {
        let result = await fetch(baseURL+books[index]).then(res => res.json());

        setTimeout(() => {
            console.log(result);
        }, 5000);
        //Filtering fields
        let data = {};
        for (let index = 0; index < properties.length; index++) {
            let field =properties[index];
            //data[field] = result.items[0].volumeInfo[field];
            //console.log(result.items[0]);
        }
    }
}

/*
* EXPORT SECTION
*/
module.exports.SearchBooksRated = searchBooksRated;
module.exports.ResolveBooksInfo = resolveBooksInfo;