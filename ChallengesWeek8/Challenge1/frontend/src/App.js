import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import to make store available to every component
import { Provider } from "react-redux";

//Importing the store
import store from "./store/store";


//components used
import PrivateRouteComponent from "./components/PrivateRoute/PrivateRoute";
import ParentBooker from "./components/parentbooker/parentbooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/NotFoundPage";
import YetToComeComponent from "./components/yetToComeComponent/yetToComeComponent";



//Including all fonts to be used
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import fontTitle1 from "./fonts/HVD Fonts - PlutoSansMedium.otf";
import fontTitle2 from "./fonts/HVD Fonts - PlutoSansCondMedium.otf";
import fontTitle3 from "./fonts/HVD Fonts - PlutoSansCondExLight.otf";



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
  }
`;

const AppContainer = styled.div`
height: 100vh;
width: 100vw;
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

//<Provider store="">

export default App;
