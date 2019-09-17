//import "/Piano.js";


/**
 * 1234567890qwertyuiopasdfghjklñzxcvbnm 
*/

var baseKeys = "zxcvbnmasdfghjklñqwertyuiop1234567890"; //Keys that are supported for assignation for tiles
var keysAssignmentList;
var tilesList;
function handlerSetting(tiles, sounds){
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);
        element.addEventListener("click", () => {
            sounds[i].play();
        });
    }

    document.addEventListener("keypress", keyListener, true);
}

function keyListener(e) {
    console.log(e.keyCode);
    if (tilesList[e.keyCode]) {
        if(!tilesList[e.keyCode].ended){
            tilesList[e.keyCode].currentTime = 0;
        }
        tilesList[e.keyCode].play();
    }
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

/*
    This function contains the initial setup of the application
*/
function init() {
    
    let tiles = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "d1", "d2", "d4", "d5", "d6"];

    keysAssignmentList = baseKeys.split("");
    
    
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    tilesList = [];

    for (let i = 0; i < 12; i++) {
        tilesList[keysAssignmentList.shift().charCodeAt(0)] = soundsList[i];
    }

    handlerSetting(tiles, soundsList);
}


init();