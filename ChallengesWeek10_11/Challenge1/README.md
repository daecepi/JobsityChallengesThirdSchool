# Jobsity challenge for weeks 10 and 11: Video Player
## Description

## Project requirements

## Dependencies
Like always there are pre-requisites to have installed 😏
- NodeJS
- NPM package manager

## Project installation and usage
1. **clone** or **download** the the repositories code.
2. Use the commands `cd` and `ls`(`dir` for windows) to position inside the folder with a command line instance.
3. run `npm install` to install the required packages.
4. run `npm run start` to test the application.

## Component reusability in other projects
### Steps to import
1. Move the content of the **"components" folder** into your **"components" folder**
2. Import the component class **ParentPlayer** (which if the main wrapper of the component), see example below:
```Javascript (in App.js example)
import { ParentPlayer } from './components/ParentPlayer/ParentPlayer';
```
3. Use the component in your application like `<ParentPlayer />`, see example below:
```Javascript (in App.js example)
const flex_basis = 30;
render(){
    return (
        <ParentPlayer
            identifier="plyrExtra"
            height="100%"
            flex_basis = {flex_basis+"%"}
        />
    );
}
```
4. specialize the component as needed

### Specializing the component
Property name | value | description | example
------------ | ------------- | ------------- | -------------
identifier | `sadlad_ksdlakdjl`, `video_1` | a string that identifies the value | `identifier="Video_1"`
height | `100`, `50` | A strign that contains the porcentage of the container de element is going to ocupy in height | `height={100}`
width | `100`, `50` | A strign that contains the porcentage of the container de element is going to ocupy in width | `width={100}`
mode | either `edit` or `mode`| A string the contains one of the two available modes (__edit__ for __editing__ and __prod__ for __production__) | `mode="prod"`
assets | `[]` `[{id: "aksdajs", name: "Cumpleaños", urlNormal: "./cumple.mp4", urlLegacy: "./cumple.mpeg"}]` | The list of assets should have the next design an id with the image, name the name of the video to show, urlNormal the url to the normal video, urlLegacy: url to the video in a supported version | `assets={[{id: "aksdajs", name: "Cumpleaños", urlNormal: "./cumple.mp4", urlLegacy: "./cumple.mpeg"}]}`

### Important commands resources taken onto account for architecture design
- [React_design_practices_2019](https://medium.com/@konstankino/2019-reactjs-best-practices-design-patterns-516e1c3ca06a)
- [Re-thinking_design_practices](https://www.youtube.com/watch?v=7iMElBsRto4)

## Key approaches of this implementation
- Data-Down, Actions-Up pattern seen in [2019_pattern_tendencies](https://medium.com/@konstankino/2019-reactjs-best-practices-design-patterns-516e1c3ca06a)
- Full component reusability in other projects, with the identification, sizing and styling parametrization given
- Component co-existance with multiple of their own, thanks to identification (method which allows information id base information saving in LocalStorage)

## TO DO LIST defined for the project
[ ] Define base components
[ ] Functionality to move the cursor through the video s
[ ] Add functionality to add snippets (in the assets section)
[ ] Add functionality to persist information (base on identifier)
[ ] Add functionality to

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Version release
- **Version 1.0.0**: React with styled-components application

## Information reviewed this week
- [Serverless_react](https://www.youtube.com/watch?v=QeNLdiTHy4M&t=1s)
