//import "/Piano.js";


/**
 * 
*/
var keysSupported = "1234567890qwertyuiopasdfghjklñzxcvbnm"; //Keys that are supported for assignation for tiles

var sound = document.querySelector("#audio10");

var piano;
function handlerSetting(id, client){
    let element = document.querySelector(".tiles-wrapper");
}


function play() {
    sound.play();
}

/*
    This function contains the initial setup of the application
*/
function init() {
    let element = document.querySelector("#s1");

    element.addEventListener("click", play);
    
    //piano = new Piano(keysSupported);

    //var tile = new Audio('../sounds/note1s.mp3');

    //tile.play();
}


init();