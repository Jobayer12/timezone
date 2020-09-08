import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './app.scss';
import Home from "./pages/home";

class App extends React.Component {
  render() {
    return (
      <>
       <BrowserRouter>
         <Switch>
           <Route exact component={Home} path="/"/>
         </Switch>
       </BrowserRouter>
      </>
    );
  }
}

export default hot(App);
