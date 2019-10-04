## Other important advancedments
- Advancing the crud of clients

## installation
__Preparing the database__
1. Locate the ApiInfo inside this folder after downloading
2. Change the path in the next command after -file and run it (with the MongoDB database working): ./mongoimport --db BookshelfBD --collection books --type json --file [PATH_IN_YOUR_COMPUTER]/ApiInfoBooks.json --jsonArray
3. OPTIONAL: If you don't want to register users to use the system

__Prepare the backend server__
1. Watch the instruction of the README.md of the nest server (located in this folder under: 'book-shelf-backend')

## Setup the backend
1. Clone or download the project and decompress it if required
2. Npm install to donwload all dependencies

## Endpoints description
__User endpoints__
- / : renders a dummy frontend until next week comes
- /login : destined for user to authenticate
- /user/register : to add new user profiles
- /books/ : to get all books in the API
- /books/:id : changen the ":id" looks for the book with the specified id
- /lend : to read lend a book if not digital (requires id of the book y id of the user that wants to lend it)
- /return : to return the book after finished with it (requires id of the book y id of the user that wants to lend it)

### Important approaches
- Reuse of BookResolver library done before
- Use two guarding strategies (a general one with JWT for the endpoints to protect)
- Usage of mongoose and schemas to keep the app organized
- Use the caching system to save information of the users about the user if necessary
- Usage of Nest's error modules like: NotFoundException, UnauthorizedException and HttpExceptions
- Salting a little the secret of JWT 

## NestJS recommendations:
- Maintain the schemas in the respective folder
- The projet folder should remind outside the folder of the backend server
- Keep strategies in the auth folder

### Faked infor from the API:
Information that was generated to books for the sake of this challenge
- Cities
- Stars
- Type: hardcover or digital