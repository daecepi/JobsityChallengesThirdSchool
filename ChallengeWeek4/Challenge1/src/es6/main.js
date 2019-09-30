/**
 * Funtion that initializes the application
 */
const init = () => {
    console.log("entry");
    let books = fetch("./FirstApi.json").then(res => res.json()).then(res =>{
        console.log(res);
    });
    console.log("asda");

    
};

const createBookContainer = (bookInfo) => {
    console.log("ad");
};

init();