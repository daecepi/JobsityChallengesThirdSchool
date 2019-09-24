/**
 * Variables for configurations of the application
*/
const baseKeys = "mjnhbgvcdxszu7y6t5re3w2q"; //Keys that are supported for assignation for tiles
const baseSustainability = 1.2;
const soundsAvailable = 12;
var keysAssignmentList; //variable that contains the baseKeys in an array form
var keysAssigned; //Variable that holds the assigned keys
var tilesList;
var actualScalesNum; // How many groups of 12 notes have been assigned to the piano (useful for HTML rendering optimization)
var hiddenScales;
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
    pedal.setAttribute("box-shadow", "0px 0px 0px 0px var(--dark-pedal)");
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
    for (let index = 1; index <= soundsAvailable; index++) {
        let sound = new Audio();
        sound.src = prestr + index + posstr;

        soundList.push(sound);
    }
    return soundList;
}

/**
 * Function incharge of creating the event listeners that require touching the elements
 * @param {Array} tiles : list of the tiles used in the HTML
 */
function setTouchHandlers(tiles){
    //Loop to assign event to HTML div-tiles
    for(let i = 0; i < tiles.length; i++) {
        let element = document.querySelector("#t"+tiles[i]);

        let index = keysAssigned[i].toUpperCase(); // get the letter assigned to the tile

        element.addEventListener("mousedown", (e) => {
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

    pedal.addEventListener("touchstart", (e)=>{
        e.preventDefault(); //Prevent default behavior of the event
        pedalDown(); //Call of the function
    });
    pedal.addEventListener("touchend", pedalUp);

    //Now since the keys have been updated everywhere and events are ready we can clear the list and wait for new ones
    keysAssigned = [];
}

/**
 * Using the configuration values to update the HTML element
 * Execution of this function finishes if conditions are not right for scaling
 */
function tilesUpdater() {
    let scalesWanted = document.querySelector("#num-scales-control").value;

    if (scalesWanted-1 > (tilesList.length/12)) {
        //If sounds are going to be generated apply the respective logic here
        alert("Not enough sounds in the system");
        return ;
    }

    if (scalesWanted > (baseKeys.length / 12)) {
        alert("Not enough keyboard are set for assignment in the system");
        return;
    }
    
    let keysAssignedCopy = keysAssigned.slice().reverse(); //since push and pop method consumes less computational power is better to reverse the array
    if(hiddenScales > 0 && actualScalesNum > scalesWanted){
        let diff = scalesWanted - actualScalesNum; //number of sets of 12 notes to be created

        let generalDiv = document.querySelector(".tiles-wrapper");
        for (let index = 0; index < generalDiv.children.length; index++) {
            if (diff > 0) {
                generalDiv.children[index].display = grid;
                hiddenScales--;
                diff--;
            }else{
                break;
            }
        }
        generalDiv.style["grid-template-columns"] = "repeat("+scalesWanted+", 1fr)";
    }else if(actualScalesNum > scalesWanted){
        //Hide scales not needed
        let diff = actualScalesNum- scalesWanted;
        let generalDiv = document.querySelector(".tiles-wrapper");
        for (let index = generalDiv.children.length-1; index <= 0 ; index--) {
            if (diff > 0) {
                generalDiv.children[index].style.display = "none";
                hiddenScales++;
                diff--;
            }else{
                break;
            }
        }
        generalDiv.style["grid-template-columns"] = "repeat("+scalesWanted+", 1fr)";
    }else if(actualScalesNum < scalesWanted){
        let diff = scalesWanted - actualScalesNum; //number of sets of 12 notes to be created
        
        let generalDiv = document.querySelector(".tiles-wrapper");
        for (let index = 0; index < diff; index++) {
            let scaleWrapper = document.createElement("div");
            //Creation of 12 notes according schema
            scaleWrapper.classList.add("tiles-wrapper-fullscale");

            //DarkWrappers
            let darkWrapper = document.createElement("div");
            darkWrapper.classList.add("dark-wrapper");
            let firstQuartet = document.createElement("div");
            firstQuartet.classList.add("first-quartet");
            let secondQuartet = document.createElement("div");
            secondQuartet.classList.add("second-quartet");

            let darkPieces = [1, 3, 6, 8, 10];//List of the position that sharp notes are always going to be in each group of 12 notes
            let quartetCounter = 0; //Variable to determine when the first quartet is finished
            
            for (let index = 0; index < 12; index++) {
                let key = keysAssignedCopy.pop().toUpperCase(); //Getting the key for this element
                //Verify if next tile is a dark piece and if is
                if (darkPieces.includes(index)) {
                    //and first quartet hasn't been filled we put it there
                    if (quartetCounter < 2) {
                        let noteElement = document.createElement("div");
                        noteElement.classList.add("dark-tile");
                        noteElement.id = "t"+key;
                        let text = document.createElement("p");
                        text.innerText = key;
                        noteElement.appendChild(text);

                        firstQuartet.appendChild(noteElement);

                        quartetCounter++;
                    }else{
                        let noteElement = document.createElement("div");
                        noteElement.classList.add("dark-tile");
                        noteElement.id = "t"+key;
                        let text = document.createElement("p");
                        text.innerText = key;
                        noteElement.appendChild(text);
                        
                        secondQuartet.appendChild(noteElement);
                    }
                }else{
                    //Creating html elements
                    let noteElement = document.createElement("div");
                    noteElement.classList.add("soft-tile");
                    noteElement.id = "t"+key;
                    let text = document.createElement("p");
                    text.innerText = key;
                    noteElement.appendChild(text);

                    scaleWrapper.appendChild(noteElement);
                }
            }

            darkWrapper.appendChild(firstQuartet);
            darkWrapper.appendChild(secondQuartet);

            scaleWrapper.appendChild(darkWrapper); //Adding the dark wrapper to the 12 scale container
            generalDiv.appendChild(scaleWrapper); // Creating the only ReFlow necesary per new Scale created

            assignTileReferences(); //Assign references to the respective tile objects

            //Assigning events that require touch (keyboard adapts automatically because of program structure)
            let keysToBeRead = keysAssigned.slice();
            setTouchHandlers(keysToBeRead);
        }
        generalDiv.style["grid-template-columns"] = "repeat("+scalesWanted+", 1fr)";
        actualScalesNum++; //Increase of the reference value for the number of scales created
    }
}

/**
 * Assigns or updates the references of the html elements they represent 
 */
function assignTileReferences() {
    for (let i = 0; i < keysAssigned.length; i++) {
        let key = keysAssigned[i];

        //Assign the Dom reference to tile
        let reference = document.querySelector("#t"+key);
        tilesList[key].assignDomReference(reference);
    }
}

/**
 * This function contains the initial setup of the application
 * @params none
 * @returns does not return
 */
function init() {
    //Base classes
    sustainOn = false;
    volume = 1;
    actualScalesNum = 0;
    hiddenScales = 0;

    //Getting the keys supported by the program as a list of elements
    keysAssignmentList = baseKeys.split("");
    
    //Get the base sounds that are going to be listened
    let soundsList = generateScaleList("./src/sounds/note", "s.mp3");

    //Creating the list that will hold the tiles
    tilesList = [];
    
   //Instantiation of Tile's objects that contain the sounds and logic
   let darkPieces = [1, 3, 6, 8, 10];//List of the position that sharp notes are always going to be in each group of 12 notes
   keysAssigned = [];
   for (let i = 0; i < 12; i++) {
        let type;
        if (darkPieces.includes(i)) {
            type= "dark";
        }else{
            type = "soft";
        }
        let key = keysAssignmentList.pop().toUpperCase();
        let tile = new Tile(type, soundsList[i], baseSustainability);
        keysAssigned.push(key);
        tilesList[key] = tile;
    }

    //Html setup and tiles assignation
    tilesUpdater();

    document.addEventListener("keydown", keyListenerDown);
    document.addEventListener("keyup", keyListenerUp);
    let numScales = document.querySelector("#num-scales-control");
    numScales.addEventListener("change", tilesUpdater);

}

//Call to the starting function
init();