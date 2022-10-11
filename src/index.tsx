import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BuhurtTimekeeper from './buhurtTimekeeper'
import Homepage from './home/homepage'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/buhurttimekeeper">
        <BuhurtTimekeeper />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
