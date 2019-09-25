
//IMPORTS
let { Book } = require('./Book');

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let fetch = require('node-fetch');


let fs = require('fs');


//Base URL of the API
const baseURL  = "https://www.googleapis.com/books/v1/volumes?q=isbn:"; //Hasta to have a ISBN book after
const specificData = "https://www.googleapis.com/books/v1/volumes/"; // has to have and ID of a book after

let finalData = [];

//Fifteen books to look for
let books = [
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

let fields = [
        'title',
        'authors',
        'publishedDate',
        'maturityRating',
        'description',
        'pageCount',
        'imageLinks'
    ];


let getBook = (book) => {
    let result = fetch(baseURL+book[0],
        {method: 'GET'}).then((data) =>{
            console.log(data.data);
        }, (err) =>{
            console.log(err);
        });

    console.log(result);
};

let resolveBooks = async (books, properties) => {
    for (let index = 0; index < books.length; index++) {
        console.log(baseURL+books[index]);
        let result = await fetch(baseURL+books[index]).then(res => res.json());

        console.log(result);
        //Filtering fields
        let data = {};
        for (let index = 0; index < properties.length; index++) {
            let field =properties[index];
            //data[field] = result.items[0].volumeInfo[field];
            //console.log(result.items[0]);
        }
    }
}

//Save final JSON inside file
let writeToFile = (err, file) => {
    if (err){
        console.log("eddr");
        return ;
    }

    console.log("DOne");
}

resolveBooks(books, fields);

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



