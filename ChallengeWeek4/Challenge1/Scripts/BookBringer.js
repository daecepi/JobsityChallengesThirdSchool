
//IMPORTS
let { SearchBooksRated, LookForBooks } = require('./BookResolverController');

//File writter
let fs = require('fs');


//Base URLs of the API
const booksSearchApi = "https://www.googleapis.com/books/v1/volumes?q=";
const baseURL  = "https://www.googleapis.com/books/v1/volumes?q=isbn:"; //Hasta to have a ISBN book after
const specificData = "https://www.googleapis.com/books/v1/volumes/"; // has to have and ID of a book after

let finalData = [];

//Fifteen books to look for
let books = [];

let booksLegacy = [
    '9781603090261',
    '9781891830754',
    '9781603090506',
    '9781891830716',
    '9781603090254',
    '9781603090476',
    '9781603093224',
    '9781891830853',
    '9781603090162',
    '9781603092654',
    '9781603092395',
    '9781603090773',
    '9781603093699',
    '9781603090698',
    '9781603090421'
];

const mainString = async () =>{
    let bookNames = await SearchBooksRated(booksSearchApi, "funny");
    console.log(bookNames);



}

mainString();
let fields = [
        'title',
        'authors',
        'publishedDate',
        'maturityRating',
        'description',
        'pageCount',
        'imageLinks'
    ];




//Save final JSON inside file
let writeToFile = (err, file) => {
    if (err){
        console.log("eddr");
        return ;
    }

    console.log("DOne");
}


// let getBook = (book) => {
//     let result = fetch(baseURL+book[0],
//         {method: 'GET'}).then((data) =>{
//             console.log(data.data);
//         }, (err) =>{
//             console.log(err);
//         });

//     console.log(result);
// };

/*
//Unitary code to test the data fetched

let bookToFind = books.map((x, i) => {
                    if (i < 1){
                        return x;
                    }
                }).filter(function (x) {
                    if (x !== undefined){
                        return x;
                    }
                });
*/

/*for (let index = 0; index < books.length; index++) {
    setTimeout(() => {getBook(books[index])}, 3000);
}*/

// books.forEach(book => {
//     console.log(book);
//     getBook(book);
// });
// finalData.forEach((element)=>{
//     console.log(element);
// })



