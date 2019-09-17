//import "/Piano.js";


/**
 * 
*/
var baseKeys = "1234567890qwertyuiopasdfghjklñzxcvbnm"; //Keys that are supported for assignation for tiles
var noteScale;
var sounde = document.querySelector("#audio10");

var piano;

function handlerSetting(tiles, sounds){
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);
        element.addEventListener("click", () => {
            sounds[i].play();
        });
    }

    document.addEventListener("keypress", function (e) {
        console.log(e.keyCode);
    }, true);
}

function generateScaleList(prestr = "", posstr = "") {
    let soundList = [];
    for (let index = 1; index <= 12; index++) {
        let sound = new Audio();
        sound.src = prestr + index + posstr;
        soundList.push(sound);
    }
    return soundList;
}

function play() {
    sound.play();
}

/*
    This function contains the initial setup of the application
*/
function init() {
    
    let tiles = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "d1", "d2", "d4", "d5", "d6"];
    
    
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    handlerSetting(tiles, soundsList);
}


init();