/**
 * Funtion that initializes the application
 */
const init = async () => {
    console.log("entry");
    let books = await fetch("/dist/FirstApi.json").then(res => res.json());

    
};

init();