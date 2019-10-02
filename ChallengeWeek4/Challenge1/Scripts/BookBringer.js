
//IMPORTS
let { SearchBooksRated, LookForBooks } = require('./BookResolverController');

//File writter
let fs = require('fs');

//Base URLs of the API
const booksSearchApi = "https://www.googleapis.com/books/v1/volumes?q=";
const baseURL  = "https://www.googleapis.com/books/v1/volumes?q=isbn:"; //Has to have a ISBN book after
const specificData = "https://www.googleapis.com/books/v1/volumes/"; // has to have and ID of a book after


//Books limit configuration


const minStars = 1;
const maxStars = 5;


let fields = [
        'title',
        'authors',
        'publishedDate',
        'maturityRating',
        'description',
        'pageCount',
        'imageLinks',
        'averageRating'
    ];

const mainString = async () =>{
    let bookNames = await SearchBooksRated(booksSearchApi, "funny", 30, "&startIndex=", fields);
    
    // let completedBook = bookNames.map(book=>{
        
    // });

    for(let i = 0; i < 10; i++){
        console.log(randomCityAssigner());
    }


    /*fs.writeFile("../dist/FirstApi2.json", JSON.stringify(bookNames), (err)=>{
        if (err) return;
        console.log("DONE");
    });*/
}

let getRandom = (max, min) =>{
    return Math.floor(Math.random()*(maxStars-minStars))-minStars;

}

mainString();



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



