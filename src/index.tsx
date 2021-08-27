import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './home/homepage'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <Router>
    <GlobalStyle />

    <Switch>
      <Route exact path="/test">
        <div>IM A TEST PAGE!</div>
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
