/**
 * Funtion that initializes the application
 */
let init = () => {
    console.log("entry");
    fetch("/dist/FirstApi.json").then(res => res.json()).then((data)=>{
        console.log(data);
    });
}

init();