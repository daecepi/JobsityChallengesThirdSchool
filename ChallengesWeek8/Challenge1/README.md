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
- __POSTMAN ROUTES:__ a collection of routes to test the API in postman 

## Database preparation:
- Make sure mongoDB proccess is running properly (thus the database if running)
- Use the command

## Installation
(after having all pre-requisites)
- Backend:
 1. Enter the folder "book-shelf-backend" made in NestJS
 2. run `npm install` inside that folder
 3. sdasda
 4. The backend on its own contains a README that contains the instruction for the backend setup

- Frontend
- 1. Enter the folder "frontend" project created by create-react-app
- 2. run `npm install` inside that folder
- 3. Run
- 3. Follow its own README.md instructions

## Comments
- Both projects are ready to run in parallel (as this last weeks) after following the readme
- IMPORTANT: for this week is planned a huge styling improvement (because of requirements of last week was not possible to take care of new html functions styling entirely)
- IMPORTANT: other filter not appearing in the requirements for the weeks like layout dinamic handling were left as extras (for this or next week to be implemented)

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
- [ ] apply filter dimically in fetchBooks funtion

## COOL APPROACHES NOT DONE FOR TIME (for next week)
- Separing reducers in: books reducer and auth reducer (and then combine then)