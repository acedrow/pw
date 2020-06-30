import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import { Homepage } from './components/pages/Homepage'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Resume } from './components/pages/Resume'
import { Topnav } from './components/topnav/Topnav'
import { BackgroundImage } from './components/BackgroundImage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
            <Topnav />
            <br />
            <Link to="/resume"> RESUME TEST LINK </Link>
            <br />
            <Link to="/"> HOME TEST LINK </Link>
            <Switch>
              <Route exact path="/">
                <Homepage></Homepage>
              </Route>
              <Route path="/resume" exact component={Resume}></Route>
            </Switch>
          </BackgroundImage>
        </BrowserRouter>
      </div>
    )
  }
}

export default hot(module)(App)
