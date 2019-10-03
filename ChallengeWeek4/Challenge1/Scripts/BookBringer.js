
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

let generateStars =(booksNum) => {
    return genRandomsFromFullList(booksNum, [1,2,3,4,5]);
};

let generateTypes = (booksNum) =>{
    return genRandomsFromFullList(booksNum, ['Digital', 'Hardcover']);
};

let generateCity = (booksNum) =>{
    return genRandomsFromFullList(booksNum, ['Cartagena', 'Medellin', 'Quito']);
};

let genRandomsFromFullList = (numOfNumbers, listOfNums) =>{
    
    let tempList = [...listOfNums];

    let randomsResult = []; //variable that stores the random numbers
    
    for (let i = 0; i < numOfNumbers; i++) {
        if (tempList.length === 0) {
            tempList = [...listOfNums];
        }
        let oscilator = Math.round(Math.random());
        if (oscilator == 1) {
            randomsResult.push(tempList.shift());
        }else{
            randomsResult.push(tempList.pop());
        }
    }
    return randomsResult;
}

/**
 * Function that looks for books and saves it to a file
 * @param {number} numOfBook : number of books to save
 * @param {string} filePath : path to the file that will be created
 */
const mainBooker = async (numOfBook, filePath) =>{
    let bookNames = await SearchBooksRated(booksSearchApi, "funny", 30, "&startIndex=", fields);
    
    let stars = generateStars(numOfBook);
    let cities = generateCity(numOfBook);
    let types = generateTypes(numOfBook);


    let completedBooks = bookNames.map(book=>{
        book['stars'] = stars.pop();
        book['cities'] = cities.pop();
        book['types'] = types.pop();
        return book;
    });

    fs.writeFile(filePath, JSON.stringify(completedBooks), (err)=>{
        if (err) return;
        console.log("DONE");
    });
}

let numOfBooks = 30;
let url = "./BooksInfo.json";

//Start of the script
mainBooker(numOfBooks, url);



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



