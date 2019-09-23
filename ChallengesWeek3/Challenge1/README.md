## Challenge 1 week 3

## Important vocabulary
1. __Scale:__ all the sounds from DO to SI (including the maintained notes)
2. __Tile:__ element that contains a note from the scale (many Tiles may work the the same scale note but not at the same frequency).
3. __Frequency:__ How sharpy a note can be.
4. __Note:__ a sound like the ones facilitated as .mp3 files.
5. __Pedal:__ is a function that maintains the sound for more time

## What was made:
1. Organization of the main folder (with the sound files) and defined an interesting color palllete for the elements.
2. Usage of HTML5, CSS3, grids, and flexbox to design the layout and styling.
3. Creation of keyboard and mouse events in two different focuses (the touch and release of the tile)
4. Tuning of the sounds (and test with different ones)
5. Organization of mobile views

### Implementation details
__CSS:__
Was divided into three parts in the same file called "main.css":
- CSS pallete variables (that contain all the color used in the application)
- Layout (that contain the css structural instructions)
- Styling (that contains all styling of the elements)

__Javascript:__
The javascript logic is divided in two files:
- Tile.js: that contains the class that holds the logic and sounds used on the application.
- main.js: which holds the list of tiles created using the Tile class, __four important functions to look at in this file are__ init: a function that sets config values and initializes the application, generateScaleList: which prepares the sounds available (according to the config section) and tilesHtmlUpdater: updates the UI base on the amount of scales wanted and possible according to sounds available.
__Important note:__ code was focused on a logic to hold as many tiles as wanted (in the distribution of 12 scaled sections as any piano) but since the usage of external libraries was forbiden to generate side notes from the original sounds and didn't looked for other notes the control of number of scales was fixed to one scale of twelve notes.
__HTML:__
Sections used in the index.html file:
- __A header__:  that contains the title (and any other menu needed in the future)
- __A Content__: that contains the  a section for simple configs of the piano, another for the piano itself and lastly the button for the sustain.

## Asumptions according sprint meeting
1. The present application doesnt necesarily have to have a footer or header
2. All design and functions must be made by us (thus libraries like tone.js aren't allowed).

## Approaches evaluated:
1. Reuse of the tiles logic for mouse and keyboard through the Tile class
2. Configuration of the 
2. Implementing abstract factory:to creacte the tiles recursevely (families would be: frequencies if user wants more than one)

## Designed to:
1. Change the base keys used in the applications just by changing the string given for it in the config variables section (in main.js)

## TO DO
Since architecture allows it:
1. Creating events to turn up volume with + and - keys
2. Creating a object that could model a piano as its own (thus in charge of functions like managing: controlling the sustain passed to the keys)
3. Adding a palletes manipulator control styling as user user wants (and its correspondings javascript functions)
4. Create a control to setup the keyboard keys used in the array