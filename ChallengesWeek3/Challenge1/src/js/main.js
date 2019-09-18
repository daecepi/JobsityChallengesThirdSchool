//import "/Piano.js";


/**
 * 
*/
var baseKeys = "zxcvbnmasdfghjklñqwertyuiop1234567890"; //Keys that are supported for assignation for tiles
const baseSustainability = 4;
var keysAssignmentList;
var tilesList;
var tilesList2;

function handlerSetting(tiles, sounds){
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);
        element.addEventListener("click", () => {
            sounds[i].play();
        });
    }
    document.addEventListener("keydown", keyListenerStart);
    document.addEventListener("keyup", keyListenerStop);
}

/**
 * Function that receives the events on the keyboard to start the sound of a tile
 *  Receives: the event object that contains code of the pressed
 *  Doesn't return
*/
function keyListenerStart(e) {
    let key = String(e.code);
    console.log(key);
    key = key.replace("Key", "").replace("Digit", "");
    if (tilesList[key]) {
        tilesList[key].startSound();
    }
}

/**
 * Function that receives the events on the keyboard to mark the stop of the tile's sound
 *  Receives: the event object that contains code of the pressed
 *  Doesn't return
*/
function keyListenerStop(e) {
    let key = String(e.code);
    console.log(key);
    key = key.replace("Key", "").replace("Digit", "");
    if (tilesList[key]) {
        tilesList[key].stopSound();
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
    let tiles = ["s1", "d1", "s2", "d2", "s3", "s4", "d4", "s5", "d5", "s6", "d6", "s7"   ];
    
    //Getting the keys supported by the program as a list of elements
    keysAssignmentList = baseKeys.split("");
    
    //Get the base sounds that are going to be listened
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    //Creating the list that will hold the tiles
    tilesList = [];
    
    
    /*
    * Creation of tiles that contain the sounds and logic
    * 6 and 12 are the positions that do not hold a a dark piece
    */
   let cont = 2;
   let par = true;
    for (let i = 0; i < 12; i++) {
        let tile = new Tile("soft", tiles[i], 10, soundsList[i], baseSustainability);
        let key = keysAssignmentList.shift().toUpperCase();

        /*if (par) {
            tile = new Tile("soft", tiles[i], 10, soundsList[i], baseSustainability);
            par = false;
        }else if(i !== 3){
            tile = new Tile("dark", tiles[i], 10, soundsList[i], baseSustainability);
            par = true;
            cont -= 1;
        }*/

        /*if (i !== 6 && i !== 12) {
            tile = new Tile("soft", tiles[i], 10, soundsList[i], baseSustainability);
        }else{
            tile = new Tile("dark", tiles[i], 10, soundsList[i], baseSustainability);
        }*/
        tilesList[key] = tile;
    }

    // Calling the function that will add the events
    handlerSetting(tiles, soundsList);


    //Section to start creating the divs
    let doDiv = document.createElement("div");
    doDiv.className += " soft-tile";
    doDiv.id = "tZ";
    
    let doShrpDiv = document.createElement("div");
    doShrpDiv.className += " soft-tile";
    doShrpDiv.id = "tX";

    let reDiv = document.createElement("div");
    reDiv.className += " soft-tile";
    reDiv.id = "tC";
    
    let reShrpDiv = document.createElement("div");
    reShrpDiv.className += " soft-tile";
    reShrpDiv.id = "tV";

    let miDiv = document.createElement("div");
    miDiv.className += " soft-tile";

    let faDiv = document.createElement("div");
    faDiv.className += " soft-tile";
    
    let faShrpDiv = document.createElement("div");
    faShrpDiv.className += " soft-tile";
    
    let solDiv = document.createElement("div");
    solDiv.className += " soft-tile";
    
    let solShrpDiv = document.createElement("div");
    solShrpDiv.className += " soft-tile";
    
    let laDiv = document.createElement("div");
    laDiv.className += " soft-tile";
    
    let laShrpDiv = document.createElement("div");
    laShrpDiv.className += " soft-tile";

    let siDiv = document.createElement("div");
    siDiv.className += " soft-tile";


}


init();