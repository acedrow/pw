import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import { AppConsole } from './console/components/AppConsole';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 style={styleTest} id='helloWorld'> Hello, Worldd! </h1>
        <AppConsole></AppConsole>
      </div>
    );
  }
}

const styleTest = {
  color: 'blue',
}

//export default App
export default hot(module)(App);
