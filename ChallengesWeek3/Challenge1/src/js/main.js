//import "/Piano.js";


/**
 * Variables for configurations of the application
*/
var baseKeys = "zxcvbnmasdfghjklñqwertyuiop1234567890"; //Keys that are supported for assignation for tiles
const baseSustainability = 4;
var keysAssignmentList;
var tilesList;
var sustainOn;


/*
* Function incharge of creating the event listeners for the mouse
*/
function mouseHandlers(tiles){
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);

        let index = baseKeys[i].toUpperCase(); // get the letter assigned to the tile
        
        element.addEventListener("mousedown", () => {
            tilesList[index].startSound(sustainOn);
        });
        
        element.addEventListener("mouseup", () => {
            tilesList[index].stopSound();
        });
    }
    //Starting the mouse listeners for the pedal
    let pedal = document.querySelector("#foot-button");
    
    pedal.addEventListener("mousedown", pedalDown);
    pedal.addEventListener("mouseup", pedalUp);
}


/**
 * EVENT HANDLER FUNCTIONS
 */

/**
 * Function that receives the events on the keyboard to start the sound of a tile
 *  Receives: the event object that contains code of the pressed
 *  Doesn't return
*/
function keyListenerDown(e) {
    let key = String(e.code);
    key = key.replace("Key", "").replace("Digit", "");

    if (tilesList[key]) {
        tilesList[key].startSound(sustainOn);
    }else if(key === "Space"){
        pedalDown();
    }
}

/**
 * Function that receives the events on the keyboard to mark the stop of the tile's sound
 *  Receives: the event object that contains code of the pressed
 *  Doesn't return
*/
function keyListenerUp(e) {
    let key = String(e.code);
    key = key.replace("Key", "").replace("Digit", "");
    if (tilesList[key]) {
        tilesList[key].stopSound();
    }else if(key === "Space"){
        pedalUp();
    }
}


function pedalDown() {
    let pedal = document.querySelector("#foot-button");
    pedal.style.background = "var(--dark-pedal)";
}

/**
 * Function used to manage the press of the pedal element (either mouse or keyboard)
 * 
*/
function pedalUp(){
    let pedal = document.querySelector("#foot-button");
    pedal.style.background = "var(--primary-pedal)";
    
    let ledPedal = document.querySelector("#pedal-led");
    if (sustainOn) {
        ledPedal.style.background = "var(--led-pedal-background-off)";
        let textChilds = ledPedal.childNodes;
        textChilds[0].textContent = "Sustain off";
        sustainOn = false;
    }else{
        ledPedal.style.background = "var(--led-pedal-background-on)";
        let textChilds = ledPedal.childNodes;
        textChilds[0].textContent = "Sustain on";
        sustainOn = true;
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
    sustainOn = false;

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
   let darkPieces = [2, 4, 7, 9, 11];//List of the position that sharp notes are always goind to be in
    
   for (let i = 0; i < 12; i++) {
        let type;
        if (darkPieces.includes(i+1)) {
            type= "dark";
        }else{
            type = "soft";
        }
        let tile = new Tile(type, tiles[i], 10, soundsList[i], baseSustainability);
        let key = keysAssignmentList.shift().toUpperCase();
        
        tilesList[key] = tile;
    }

    //Assigning events
    mouseHandlers(tiles, soundsList);
    document.addEventListener("keydown", keyListenerDown);
    document.addEventListener("keyup", keyListenerUp);

    //Section to start creating the divs
    let generalDiv = document.querySelector("#tilesContainer");

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

//Call to the starting function
init();