# Jobsity bookshelf week 9

## Pre-requisites
- Install MongoDB and set things up
  - For windows: [Medium Blog](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
  - For mac: [Github_Article](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
  - linux: [MongoDB_page](https://docs.mongodb.com/manual/administration/install-on-linux/)

## Folders in the project that you will find:
- __book-shelf-backend folder:__ Folder where the backend of the applcation is.
- __frontend:__ Folder in which the frontend of the application is located
- __BD folder:__ contains the book's information to be added to the file
- __POSTMAN ROUTES:__ a collection of routes to test the API using [postman](https://www.getpostman.com/), to import collentions in postman read this [example](https://developer.ft.com/portal/docs-start-install-postman-and-import-request-collection)


## Database preparation:
- Make sure mongoDB proccess is running properly (thus the database if running).

### Steps to prepare dabase
1. If your mongodb bin folder is added to Path of your system (therefore any command in there can be opened in the console just by adding it) got to the next step IF NOT move inside your terminal to the BIN folder of your MongoDB installation
2. locate the BooksInfo.json inside the BD folder and copy the path to it (this is the information of the books)
3. Run the command shown below putting the path that you copied instead of "[PATH_IN_YOUR_COMPUTER]" (with the MongoDB database working)
- ON MAC/LINUX `./mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray`
- ON WINDOWS `mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray`
4. OPTIONAL: If you don't want to register users a users.json is also available in the BD folder (run the command that you use to import books and add to it)

## Installation
(after having all pre-requisites)
- Backend:
 1. use the `cd` command to get into "book-shelf-backend" folder from a terminal
 2. run `npm install` in the command prompt used
 3. then run `npm run start:dev` to run the backend (changes will be loaded automatically after saving)
 4. Read the readme inside the folder for more useful commands

- Frontend
  1. use the `cd` command to get into "frontend" folder from a terminal
  2. run `npm install` in the command prompt used
  3. then run `npm run start` to run the frontend (changes will be loaded automatically once)
  4. Read the readme inside the folder for more useful commands


## For production
__IMPORTANT:__ steps 1 and 2 from installation section in this readme are necessary in both frontend and book-shelf-backend folder.
1. inside frontend folder run `npm run build`
2. move the content of the generated "build" folder to "public" folder inside "book-shelf-backend" folder


## Missing
- The point of implementing the reservation form with the DatePicker, part of the component exists (but the implementation will be available during the day)

## TO DO's (for this week can be seen in each separate README, IMPORTANT TO READ ITS TO DO'S)
- [X] Reused pallete color even in external star-rating-component (with RGB to string conversion)
- [X] Add more security for endpoint (error handling)
- [ ] Put arrows to change books next to the book component
- [X] pass props to change the behaviour of redirecting (using the callback of the setState method)
- [X] includu page count
- [ ] fixing images responsiveness
- [X] improve endpoint callbacks
- [X] Setting up routes
- [X] Improve security
- [X] 404 page
- [X] pagination
- [X] improving averall styling
- [X] add default behaviour in books that doesn't have certain info
- [X] using formik with forms
- [X] modularizing schema for sign up of Formik
- [ ] managing notification with advance extension like react-alert
- [X] modularizing notifications in the entire application 
- [ ] create message handlers for the entire application
- [ ] improve images styles
- [ ] apply filter dymically in fetchBooks funtion

## COOL APPROACHES NOT DONE FOR TIME (for next week)
- Separing reducers in: books reducer and auth reducer (and then combine then)