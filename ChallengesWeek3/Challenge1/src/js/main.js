/**
 * Variables for configurations of the application
*/
const baseKeys = "u7y6t5re3w2qmjnhbgvcdxsz"; //Keys that are supported for assignation for tiles
const baseSustainability = 1.2;
var keysAssignmentList; //variable that contains the baseKeys in an array form
var keysAssigned; //Variable that holds the assigned keys
var tilesList;
var scalesNum; //Num of scales needed by the user (available when the user)
var sustainOn; //Vaiable that holds the press of the pedal
var volume; // variables that contain the volume of the system



/**
 * EVENT HANDLERS SECTION
 */

/**
 * Function that receives the events on the keyboard to start the sound of a tile
 * @params the event object that contains code of the pressed
 * @returns doesn't return any object
*/
function keyListenerDown(e) {
    let key = String(e.code);
    key = key.replace("Key", "").replace("Digit", "");

    if (tilesList[key]) {
        tilesList[key].startSound(sustainOn, volume);
    }else if(key === "Space"){
        pedalDown();
    }
}

/**
 * Function that receives the events on the keyboard to mark the stop of the tile's sound
 * @params the event object that contains code of the pressed
 * @returns doesn't return any object
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

/**
 * Function used to manage the press of the pedal element (either mouse or keyboard)
 * @params the event object that contains code of the pressed
 * @returns doesn't return any object
*/
function pedalDown(e) {
    let pedal = document.querySelector("#foot-button");
    pedal.style.background = "var(--dark-pedal)";
}

/**
 * Function used to manage the release of the pedal element (either mouse or keyboard)
 * @params the event object that contains code of the pressed
 * @returns doesn't return any object
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


/*
    GENERAL APPLICATION FUNCTIONS
*/

/**
 * Instantion of all the sounds located in files in the javascript audio class 
 * @param {string} prestr - starting string path where the note files are
 * @param {string} posstr - ending string path where the note files are
 * 
 * @returns list with all the sounds to be assigned to the tiles
 */
function generateScaleList(prestr = "", posstr = "") {
    let soundList = [];
    for (let index = 1; index <= 12; index++) {
        let sound = new Audio();
        sound.src = prestr + index + posstr;

        soundList.push(sound);
    }
    return soundList;
}

/**
 * Using the configurations values and 
 * @param 
 */
function tilesHtmlUpdater() {
    
    for (let i = 0; i < keysAssigned.length; i++) {
        //Section to start creating the divs
    let generalDiv = document.querySelector("#tiles-wrapper");

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
}

/*
* Function incharge of creating the event listeners for the mouse
*/
function mouseHandlers(tiles){
    //Loop for HTML div-tiles
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#"+tiles[i]);

        let index = keysAssigned[i].toUpperCase(); // get the letter assigned to the tile

        element.addEventListener("mousedown", (e) => {
            console.log();
            tilesList[index].startSound(sustainOn, volume);
        });
        
        element.addEventListener("mouseup", (e) => {
            tilesList[index].stopSound();
        });

        element.addEventListener("touchstart", (e) => {
            e.preventDefault();
            tilesList[index].startSound(sustainOn, volume);
        });
        
        element.addEventListener("touchend", (e) => {
            tilesList[index].stopSound();
        });

    }
    //Starting the mouse listeners for the pedal
    let volumenController = document.querySelector("#volume-control");

    volumenController.addEventListener("change", (e) =>{
        volume = document.querySelector("#volume-control").value / 100;
    });


    let pedal = document.querySelector("#foot-button");
    
    pedal.addEventListener("mousedown", pedalDown);
    pedal.addEventListener("mouseup", pedalUp);

    //
    pedal.addEventListener("touchstart", (e)=>{
        e.preventDefault(); //Prevent default behavior of the event
        pedalDown(); //Call of the function
    });
    pedal.addEventListener("touchend", pedalUp);
}


/**
 * This function contains the initial setup of the application
 * @params none
 * @returns does not return
 */
function init() {
    //Base classes
    let tiles = ["s1", "d1", "s2", "d2", "s3", "s4", "d4", "s5", "d5", "s6", "d6", "s7"   ];
    sustainOn = false;
    volume = 1;

    //Getting the keys supported by the program as a list of elements
    keysAssignmentList = baseKeys.split("");
    
    //Get the base sounds that are going to be listened
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    //Creating the list that will hold the tiles
    tilesList = [];
    
    
   //Instantiation of Tile's objects that contain the sounds and logic
   let darkPieces = [2, 4, 7, 9, 11];//List of the position that sharp notes are always going to be in each 12
   keysAssigned = [];
   for (let i = 0; i < 12; i++) {
        let type;
        if (darkPieces.includes(i+1)) {
            type= "dark";
        }else{
            type = "soft";
        }
        let tile = new Tile(type, tiles[i], 10, soundsList[i], baseSustainability);
        let key = keysAssignmentList.pop().toUpperCase();
        keysAssigned.push(key);
        tilesList[key] = tile;
    }

    
    //Assigning events
    mouseHandlers(tiles, soundsList);
    document.addEventListener("keydown", keyListenerDown);
    document.addEventListener("keyup", keyListenerUp);

    tilesHtmlUpdater();
}

//Call to the starting function
init();