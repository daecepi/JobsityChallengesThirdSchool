const defaultResults = 15; //Holdis the initial number of books to load

/**
 * Funtion that initializes the application
 */
let init = () => {
    console.log('sd');
    //Get books from API
    fetch("./FirstApi.json").then(res => res.json()).then( res =>{
        let bookContainersContent;
        //Transform initial books to html 
            let booksContent = res.slice(0, defaultResults)
            .map(book=>{
                return createBookContainer(book);
            }).join('');
        console.log(booksContent);
        //Assigning books to html element
        let booksContainer = document.querySelector("#book-container");
        booksContainer.innerHTML = booksContent;
    });

    
};

const createBookContainer = (book) => {
    return `
    <div class="book">
        <img src="${book.imageLinks.smallThumbnail}" alt="">
        <p class="book-title">${book.title}</p>
        <p class="authors">${book.authors.toString()}</p>
        ${getRating(book.averageRating)}
    </div>
    `;
};

const getRating = (num) =>{
    if (num) {
        return ``;
    }else{
        return `Not rated`;
    }
};

init();