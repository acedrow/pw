import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChessMain from './chess'
import Homepage from './home/homepage'
import KdmMainpage from './kdm'
import Skunkworks from './skunkworks'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <Router>
    <GlobalStyle />

    <Switch>
      {/* <Route exact path="/kdm">
        <KdmMainpage />
      </Route> */}
      {/* <Route exact path="/chess">
        <ChessMain />
      </Route> */}
      <Route exact path="/sw">
        <Skunkworks />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
