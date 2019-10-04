/**
 * Funtion that initializes the application
 */
const init = () => {
    fetch("./BooksInfo.json").then(res => res.json()).then(res =>{
        let generalLayout = ``;
        for (let i = 0; i < res.length; i++) {
            generalLayout += createBookContainer(res[i]);
            
        }
        let booksContainer = document.querySelector("#books");
        booksContainer.innerHTML(generalLayout);
    });
};

const createBookContainer = (bookInfo) => {
    return `
        <div class="book">
            <img src="${bookInfo.imageLinks.smallThumbnail}" alt="">
            <p class="book-title">${bookInfo.title}</p>
            <p class="authors">${''.join(...bookInfo.authors)}</p>
            <p class="stars">${bookInfo.stars}</p>
        </div>
    `;
};



init();