import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import { Homepage } from './components/pages/Homepage'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Resume } from './components/pages/Resume'
import { Topnav } from './components/topnav/Topnav'
import { BackgroundImage } from './components/BackgroundImage'
import styled from 'styled-components'
import { GearGridTest } from './components/pages/GearGridTest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
            <MainContentContainer id="mainContentContainer">
              <Topnav />
              <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/dragTest" component={GearGridTest}></Route>
              </Switch>
            </MainContentContainer>
          </BackgroundImage>
        </BrowserRouter>
      </div>
    )
  }
}

//TODO: need to make this centered when fullscreen
const MainContentContainer = styled.div`
  max-width: 1200px;
`

export default hot(module)(App)
