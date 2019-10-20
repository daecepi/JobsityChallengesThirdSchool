# Booksshelf backend week 6


## Setting things up
1. After downloading/cloning the repo, locate this to folder:
- BD (which contains the book's information to be added to the file)
- POSTMAN ROUTER (a collection of routes already setup for use of the API when ready)

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
- - PUT: bookId: string and userId
- /books : to get all books in the API
- - HEADER: needs an auth token (jwt token)
- - GET
- - Query params needed: startIndex since the API returns sets of 1 books (will be optional next week)
- - Optional query params:
- - - city (the name of the city to look for)
- - - type (the type of the book that is required for the search)
- - - words (words to look for in the tittle of the book, may be expanded to look in description too)
- /books/city/:cityName : to get all books that are in a city, where cityName is the name of the city to look in
- - HEADER: needs an auth token (jwt token)
- - GET
- /books/digital : to get all books that are of type digital in the API (uses the service that looks for books so can be scalable to look for as the city endpoint)
- - HEADER: needs an auth token (jwt token)
- - GET
- /books/hardcover : to get all books that are of type hardcover in the API (uses the service that looks for books so can be scalable to look for as the city endpoint) (NOT IN USE FOR ACTUAL REQUIREMENTS)
- - HEADER: needs an auth token (jwt token)
- - GET
- /books/search/:words : to get all books that contain the string to find in their title
- - HEADER: needs an auth token (jwt token)
- - GET
- /books/:id : changen the ":id" looks for the book with the specified id
- - HEADER: needs an auth token (jwt token)
- - GET and an id on the URL after an slash ("/")
- /lend : to read lend a book if not digital (requires id of the book y id of the user that wants to lend it)
- - HEADER: needs an auth token (jwt token)
- - PUT: bookId: string and userId

### Important approaches
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
[x] Use of Nest
[x] Some tests written
[X] Fusing the endpoint to use query strings
[ ] Dockerize the application according to this doc (that show how to do it scalably): https://dev.to/carlillo/part-7-deploy-backend-nestjs-dockerdocker-compose-3cmb
[ ] Assign secret to a service for it (better practice)
[X] Limitant of how many results can you get at the same time from the books endpoint
[ ] Put the frontend in the public's folder that serves the static files
[x] searching for books in the title
[X] returning size of the books list per query in the /books endpoint
[ ] searching for books in the description (still in evaluation of time this week)
[ ] Adding state objects to every endpoint for better evaluation of queries to endpoint

### Faked infor from the API:
Information that was generated to books for the sake of this challenge
- Cities
- Stars
- Type: hardcover or digital

# Nest project's backend commands

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - David Eduardo Cermeño Pinzon

## License

  Nest is [MIT licensed](LICENSE).
