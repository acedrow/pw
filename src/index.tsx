import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChessMain from './chess'
import Homepage from './home/homepage'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <Router>
    <GlobalStyle />

    <Switch>
      <Route exact path="/chess">
        <ChessMain />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
