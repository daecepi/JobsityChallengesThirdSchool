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
4. 

### Implementation details
__CSS:__
Was divided into three parts in the same file called "main.css":
- CSS pallete variables (that contain all the color used in the application)
- Layout (that contain the css structural instructions)
- Styling (that contains all styling of the elements)

__Javascript:__
The javascript logic is divided in two files:
- Tile.js: that contains the class that holds the logic and sounds used on the application.
- main.js: which holds the list of tiles created using the Tile class, __three important functions to look at in this file are__ init:

__HTML:__


## Asumptions
1. The present application doesnt have to have a footer.

## Approaches evaluated:
1. Reuse of the tiles logic for mouse and keyboard through the Tile class
2. Configuration of the 
2. Implementing abstract factory:to creacte the tiles recursevely (families would be: frequencies if user wants more than one)


## Designed to:
1. Change the base keys used in the applications just by changing the string given for it in the configs section

## TO DO
1. Creating a object that could model a piano as its own (thus in charge of functions like managing: controlling the sustain passed to the keys)
2. Adding a palletes manipulator control in the HTML structure (and its correspondings javascript functions)
3. Create a element that says