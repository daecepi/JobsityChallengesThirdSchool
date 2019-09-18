//import "/Piano.js";


/**
 * 1234567890qwertyuiopasdfghjklñzxcvbnm 
*/

var baseKeys = "zxcvbnmasdfghjklñqwertyuiop1234567890"; //Keys that are supported for assignation for tiles
const baseSustainability = 4;
var keysAssignmentList;
var tilesList;

function handlerSetting(tiles, sounds){
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);
        element.addEventListener("click", () => {
            sounds[i].play();
        });
    }
    document.addEventListener("keydown", keyListener, false);
}

function keyListener(e) {
    console.log(e.keyCode);
    let key = String(e.code);
    key = key.replace("Key", "").replace("Digit", "");
    if (tilesList[key]) {
        if(!tilesList[key].ended){
            tilesList[key].currentTime = 0;
        }
        tilesList[key].play();
    }
}

function generateScaleList(prestr = "", posstr = "") {
    let soundList = [];
    for (let index = 1; index <= 12; index++) {
        let sound = new Audio();
        sound.src = prestr + index + posstr;
        sound.playbackRate = baseSustainability;

        soundList.push(sound);
    }
    return soundList;
}

/*
    This function contains the initial setup of the application
    returns: no parameters
*/
function init() {
    //Base classes
    let tiles = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "d1", "d2", "d4", "d5", "d6"];
    
    //Getting the keys from the base list
    keysAssignmentList = baseKeys.split("");
    
    //Get the base sounds that are going to run
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    tilesList = [];
    

    for (let i = 0; i < 12; i++) {
        let key = keysAssignmentList.shift().toUpperCase();
        console.log(key);
        tilesList[key] = soundsList[i];
    }

    handlerSetting(tiles, soundsList);

    //Section to start creating the divs
    let doDiv = document.createElement("div");
    doDiv.className += " soft-tile";
    let doShrpDiv = document.createElement("div");
    let reDiv = document.createElement("div");
    let reShrpDiv = document.createElement("div");
    let miDiv = document.createElement("div");
    let faDiv = document.createElement("div");
    let doShrpDiv = document.createElement("div");
    let solDiv = document.createElement("div");
    let doShrpDiv = document.createElement("div");
    let laDiv = document.createElement("div");
    let doShrpDiv = document.createElement("div");
    let siDiv = document.createElement("div");

}


init();