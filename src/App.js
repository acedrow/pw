import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import { Topnav } from './topnav/Topnav'

class App extends Component {
  render() {
    return (
      <>
      <div className='BackgroundImage'></div>
        <div className="App">
          <Topnav></Topnav>
          <h1 font-weight="regular"> Linden Holt -
          <br/> a full-stack React developer living in Minneapolis </h1>
        </div>
      </>
    )
  }
}

export default hot(module)(App)
