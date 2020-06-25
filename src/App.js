import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import { Topnav } from './components/topnav/Topnav'
import { Blurb } from './components/linden-info/blurb'
import { BackgroundImage } from './components/BackgroundImage'
import { Homepage } from './components/homepage/Homepage'

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Homepage></Homepage>

        </div>
      </>
    )
  }
}

export default hot(module)(App)
