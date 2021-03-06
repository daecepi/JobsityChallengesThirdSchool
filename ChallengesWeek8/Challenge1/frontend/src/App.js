import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import to make store available to every component
import { Provider } from "react-redux";

//Importing the store
import store from "./store/store";


//components used
import PrivateRouteComponent from "./components/PrivateRoute/privateRoute";
import ParentBooker from "./components/parentbooker/parentBooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/notFoundPage";
import YetToComeComponent from "./components/yetToComeComponent/yetToComeComponent";



//Including all fonts to be used
import {createGlobalStyle} from "styled-components";
import fontTitle1 from "./fonts/HVD Fonts - PlutoSansMedium.otf";
import fontTitle2 from "./fonts/HVD Fonts - PlutoSansCondMedium.otf";
import fontTitle3 from "./fonts/HVD Fonts - PlutoSansCondExLight.otf";

import { AppContainer } from './mainAppComponents';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    @import url(${fontTitle1});
    font-family: 'TitlePluton', sans-serif;
    
    @import url(${fontTitle2});
    font-family: 'PlutonGeneral', sans-serif;

    @import url(${fontTitle3});
    font-family: 'SecondTitlePluton', sans-serif;
    
    height: 100vh;
    width: 100vw;
    
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;



class App extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    let token = localStorage.getItem("access_token");

    if (token) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <GlobalStyles />
        <AppContainer>
          <Router>
            <Switch>
              <PrivateRouteComponent path="/" exact component={ParentBooker} />
              <PrivateRouteComponent path="/city/:name" component={ParentBooker} />
              <PrivateRouteComponent path="/type/:name" component={ParentBooker} />
              <PrivateRouteComponent path="/user/loans" exact component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/readings" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/history" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/later" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/favorites" component={YetToComeComponent} />
              <PrivateRouteComponent path="/book/:id" component={YetToComeComponent} />
              <Route path="/login" render={() => <Login {...this.props} />} />
              <Route path="/register" render={(match, props) => <Register {...props} {...match} />} />
              <Route component={NotFoundPageComponent} />
            </Switch>
          </Router>
        </AppContainer>
      </Provider>
    );
  }
}


export default App;
