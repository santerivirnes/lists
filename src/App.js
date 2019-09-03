import React, { Component } from "react";
import "./App.css";
//import TodoList from "./components/todos";
import SignIn from "./auth/SignIn"
import SignUp from "./auth/SignUp"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
 

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <navbar />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;