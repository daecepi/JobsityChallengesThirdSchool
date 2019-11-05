# Jobsity bookshelf web app
State of the bookshelf challenge in week 8 of the proccess

### News:
- **Breaking change**: some fields in the database were renamed (check versioning for more info) and DATABASE preparation for new installation

## Pre-requisites
- Install MongoDB and set things up
  - For windows: [Medium Blog](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
  - For mac: [Github_Article](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
  - For linux: [MongoDB_page](https://docs.mongodb.com/manual/administration/install-on-linux/)
- NodeJs and NPM
  - Page to [download](https://nodejs.org/es/download/), [mac_option](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm), [linux_option](https://nodejs.org/es/download/package-manager/)
  - Run `npm install -g npm` or `sudo npm install -g npm` (for linux and mac)

## Folders in the project that you will find:
- __book-shelf-backend folder:__ Folder where the backend of the applcation is.
- __frontend:__ Folder in which the frontend of the application is located
- __BD folder:__ contains the book's information to be added to the file
- __Postman routes:__ a collection of routes to test the API using [postman](https://www.getpostman.com/).


## Database preparation:
1. Make sure mongoDB proccess is running properly (thus the database if running before continuing).
2. If a version **previous to October 25 (2019)** of the database is installed on your system please follow steps bellow
  1. Enter a command line as you would to execute `mongod` command and run the  command `mongo` instead.
  2. Follow this [example](https://www.tutorialkart.com/mongodb/mongodb-delete-database/) to drop the **database with the name "BookshelfBD"** .

### Steps to prepare database
1. If your mongodb bin folder is added to Path of your system (therefore any command in there can be opened in the console just by adding it) got to the next step IF NOT move inside your terminal to the BIN folder of your MongoDB installation.
2. locate the BooksInfo.json inside the BD folder and copy the path to it (this is the information of the books)
3. Run the command shown below putting the path that you copied instead of "[PATH_IN_YOUR_COMPUTER]" (with the MongoDB database working)
- ON MAC/LINUX `./mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray`
- ON WINDOWS `mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray`
4. OPTIONAL: If you don't want to register users a users.json is also available in the BD folder (run the command that you use to import books and add to it)

## Installation
(after doing all pre-requisites and preparing the database)

- Backend:
 1. use the `cd` command to get into "book-shelf-backend" folder from a terminal
 2. run `npm install` in the command prompt used
 3. then run `npm run start:dev` to run the backend (changes will be loaded automatically after saving)
 4. Read the readme inside the folder for more useful commands

- To work with the routes from postman:
  1. Import collentions in postman, [example](https://developer.ft.com/portal/docs-start-install-postman-and-import-request-collection)
  2. If you are new to postman check this cool (playlist)[https://www.youtube.com/embed/YKalL1rVDOE?list=PLM-7VG-sgbtBsenu0CM-UF3NZj3hQFs7E]
  3. Click send on the **Authentice** route
  4. Get the token given body section of the answer in the access_token parameter, *see example*:
  ```
  #Example body:
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvZmkiLCJpYXQiOjE1NzIyMDI5OTksImV4cCI6MTU3MjI4OTM5OX0.-wBPNB4O1aYKxNzC3Jb8ybvAcmvDzcDBZ-acnTJYWj8",
    "user": {
        "favorites": [],
        "readings": [],
        "laterReadings": [],
        "_id": "5d9a5f594351ff21e04f3ea3",
        "identification": "20547854582",
        "name": "Sofia",
        "lname": "Peralta",
        "username": "sofi",
        "password": "sofi123123",
        "age": 20,
        "email": "sofia.p@gmail.com",
        "__v": 0
  }
  }
  # Access_token given: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvZmkiLCJpYXQiOjE1NzIyMDI5OTksImV4cCI6MTU3MjI4OTM5OX0.-wBPNB4O1aYKxNzC3Jb8ybvAcmvDzcDBZ-acnTJYWj8
  ```
5. See the **routes that require a token** in book-shelf-backend's folder **README.md file**
6. Put the token in any protected route inside the **headers** portion of the request next to **Bearer**, see example:
```
  Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvZmkiLCJpYXQiOjE1NzIyMDI5OTksImV4cCI6MTU3MjI4OTM5OX0.-wBPNB4O1aYKxNzC3Jb8ybvAcmvDzcDBZ-acnTJYWj8
  ```

- Frontend
  1. use the `cd` command to get into "frontend" folder from a terminal
  2. run `npm install` in the command prompt used
  3. then run `npm run start` to run the frontend (changes will be loaded automatically once)
  4. Read the readme inside the folder for more useful commands


## Deployment
__IMPORTANT:__ steps 1 and 2 from installation section in this readme are necessary in both frontend and book-shelf-backend folder.
1. inside frontend folder run `npm run build`
2. move the content of the generated "build" folder to "public" folder inside "book-shelf-backend" folder
3. Change the port as wanted in main.ts file
4. run `npm run start:dev` to compile the project
5. Copy the project to a desired destination (if still not in it)
6. run `npm run start:prod` to start the run for production

## Dependencies
- Entire project
  - NPM: 6.12.0

- backend:
  - NodeJS: 9.3.0
  - Nest and many of its modules modules
  - Mongoose: 5.7.5
  - rxjs: 6.5.3

- frontend:
  - Formik: 1.5.8
  - Prettier: 1.18.2
  - Reactstrap: 8.1.1
  - redux: 7.1.1
  - react-router-dom: 5.1.2
  - styled components: 4.4.0

  **External components used for time**
  - React-datepicker: 2.9.6
  - React-start-rating-component: 1.4.1
  - react-notification-alert: 0.0.12


## Version release
**(Only breaking changes from last versions are referenced for brevity)**
- *Version 1.0.0*: Vanilla javascript, SCSS and HTML5 for UI and NodeJS server
- *Version 2.0.0*: Usage of react for UI
- Version 3.0.0: Usage of redux along side React (fields renamed on database schema **New database import required**)
- **Version 3.1.0**: implementation of websockets and the rest of the functionalities

## Authors 
- **David Eduardo Cermeño Pinzón** - *main developer*

## Acknowledgements
To jobsity for producing the enviroment of a real exercise of software development
- [Polyglot_article](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) for its strong password's regular expression (used for fast development in register component)