/**
 * IMPORTANT
 * This controller have been based on Google's API url structures
 */
let fetch = require('node-fetch');

/**
 * Section of Controller functions
 */

/**
 * This function gets books that are rated according to
 * @param {String} url : contains the API url where the books are
 * @param {String} category : contains the API url where the books are
 * @param {String} postr : contains the API url where the books are
 */
const searchBooksRated = async (baseURL, category, posstr) => {
    if (!baseURL && !category) {
        let error = {}
        error['Error'] = "function call not correct";
        return error;
        //let result = await fetch(baseURL+category).then(res => res.json());
    }
    //Building the url to pass to API
    let finalURL = `${baseURL}${(category ? category : "" )}${(posstr ? posstr : "" )}`;

    //Returns promise from fetch
    return fetch(baseURL).then(res => res.json());
};

/**
 * 
 * @param {*} books 
 * @param {*} properties 
 */
const resolveBooks = async (books, properties) => {
    for (let index = 0; index < books.length; index++) {
        console.log(baseURL+books[index]);
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
module.exports.LookForBooks = resolveBooks;