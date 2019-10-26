### Booksshelf backend week 9


## Setting things up
1. After downloading/cloning the repo, locate this to folder:

## installation
__Preparing the database__
(after downloading/cloning the repo) 
1. If your mongodb bin folder is added to Path of your system (therefore any command in there can be opened in the console just by adding it) got to the next step IF NOT move inside your terminal to the BIN folder of your MongoDB installation
2. locate the BooksInfo.json inside the BD folder and copy the path to it (this is the information of the books)
3. Run the command shown below putting the path that you copied instead of "[PATH_IN_YOUR_COMPUTER]" (with the MongoDB database working)
- ON MAC/LINUX ./mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray
- ON WINDOWS mongoimport --db BookshelfBD --collection books --type json --file "[PATH_IN_YOUR_COMPUTER]/BooksInfo.json" --jsonArray
4. OPTIONAL: If you don't want to register users a users.json is also available in the BD folder (run the command that you use to import books and add to it)
__(HAVE IN MIND THAT THE USERS ARE PROVIDED FOR FAST TESTING AND SHOULD BE DELETED ON DEPLOYMENT)__

__Prepare the backend server__
1. Follow the instruction of the README.md in "book-shelf-backend" folder (which is the backend that uses NestJS with express)
2. it will tell you to run npm install inside the folder
3. then run "npm run start:dev" to run the server for development (more commands can be seen in the README.md mentioned)

## Endpoints description
__User endpoints__
- / : renders a dummy frontend until next week comes
- - Doesn't need to recieve anything
- /login : destined for user to authenticate and where jwt token is going to be resolved
- - POST (url http encoded): a user: string and a password: string
- /user/register : to add new user profiles
- - POST: identification: string, name: string, lname: string, username:string, password: string, age: number, email: string;
- user/:userId/return/:bookId : to return the book after finished with it (requires id of the book y id of the user that wants to lend it)
- - HEADER: needs an auth token (jwt token)
- - PUT: bookId: id that MongoDB assigned to the book and userId: id that MongoDB assigned to the user
- /books : to get all books in the API
- - HEADER: needs an auth token (jwt token)
- - GET
- - Needed query params: startIndex since the API returns sets of 1 books (will be optional next week)
- - Optional query params:
- - - city (the name of the city to look for)
- - - type (the type of the book that is required for the search)
- - - words (words to look for in the tittle of the book, may be expanded to look in description too)
- /books/:id : changen the ":id" looks for the book with the specified id
- - HEADER: needs an auth token (jwt token)
- - GET and an id on the URL after an slash ("/")
- /lend : to read lend a book if not digital (requires id of the book y id of the user that wants to lend it)
- - HEADER: needs an auth token (jwt token)
- - PUT: bookId: string and userId

# Important approaches
- Reuse of BookResolver library done before
- Use two guarding strategies (a general one with JWT for the endpoints to protect)
- Usage of mongoose and schemas to keep the app organized
- Use the caching system to save information of the users about the user if necessary
- Usage of Nest's error modules like: NotFoundException, UnauthorizedException and HttpExceptions
- Salting a little the secret of JWT
- Many of the default testing files modified for actual code are left for testers to agilize their work
- After results have been processed terminology established for success object is: {status, message }

## NestJS recommendations:
- Maintain the schemas in the respective folder
- The projet folder should remind outside the folder of the backend server
- Keep strategies in the auth folder

## TO DO extras
Not in the challenge
- [X] Use of Nest
- [X] Some tests written
- [X] Fusing the endpoint to use query strings
- [ ] Dockerize the application according to this doc (that show how to do it scalably): https://dev.to/carlillo/part-7-deploy-backend-nestjs-dockerdocker-compose-3cmb
- [ ] Assign secret to a service for it (better practice)
- [X] Limitant of how many results can you get at the same time from the books endpoint
- [ ] Put the frontend in the public's folder that serves the static files
- [X] searching for books in the title
- [X] returning size of the books list per query in the /books endpoint
- [ ] searching for books in the description (still in evaluation of time this week)
- [X] Adding state objects to every endpoint for better evaluation of queries to endpoint
- [ ] usage of nest pagination module next week (for learning purposes the pagination was stablished with mongo's aggregate funtion)
- [ ] Modify to bring only books with whole information


# Nest project's important commands

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

