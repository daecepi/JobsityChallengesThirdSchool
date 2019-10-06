### Bookshelf
#### Pre-requisites for the project (including the script)
- NodeJS
- NPM
- (The packages on the dependencies to compile section)


## How to use the script
1. After cloning or downloading the repository cd into the /Scripts folder
2. Use the command 'npm install' to download its dependencies
3. Modifying the BookBringer.js file according to requirements (URL, properties)
4. Run it using the command 'node BookBringer.js'


## How to use the project for tests and production
1. run "npm install" in the project folder to install all packages required by the projects
2. run "gulp" that runs by default all tasks that compile de project
4. run "gulp watch" to start waiting for file changes to update the build folder (or further changes to the projects)


### Dependencies of the frontend application
__To Compile:__
1. gulp
2. gulp-sourcemaps
3. gulp-babel
4. gulp-sass
5. gulp-concat

__To use the application:__
1. Bootstrap's rating stars class
2. Font-awesome's CDN for the icons

## TO DO
[ ] move to Webpack in new version (offers good development speed and is quite flexible)