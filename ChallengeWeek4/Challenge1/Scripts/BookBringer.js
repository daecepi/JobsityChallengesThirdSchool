
//IMPORTS
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let fs = require('fs');

//Base URL of the API
const baseURL  = "https://www.googleapis.com/books/v1/volumes?q=isbn:"; //Hasta to have a ISBN book after
const specificData = "https://www.googleapis.com/books/v1/volumes/"; // has to have and ID of a book after


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

let fieldsSpecifics = {
    "general": [
        'title',
        'authors',
        'publishedDate',
        'averageRating',
        'description',
        'pageCount',
        'imageLinks'
    ],
    "specifics": [
        'categories',
        ]
};


let getBook = (book) => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL+books[0], false);
    xhr.send(null);


    if (xhr.status == 200) {
        let object = JSON.parse(xhr.responseText);
        console.log(object['items']);
    }
};

let getBooksSpecific = (id) => {
    
}


//Save final JSON inside file
let writeToFile = (err, file) => {
    if (err){
        console.log("eddr");
        return ;
    }

    console.log("DOne");
    
}

let finalData = [];
books.forEach(book => {
    let result = getBook(book);
    console.log(result);
});


//let file = fs.writeFile("./data.json", xhr.responseText, callToApi);

//const https = require("https");


