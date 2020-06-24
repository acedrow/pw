import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import { Topnav } from './components/topnav/Topnav'
import { Blurb } from './components/linden-info/blurb'
import { BackgroundImage } from './components/BackgroundImage'

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
            <Topnav></Topnav>
            <Blurb></Blurb>
            </BackgroundImage>

        </div>
      </>
    )
  }
}

export default hot(module)(App)
