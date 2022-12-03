import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BuhurtTimekeeper from './buhurtTimekeeper'
import FLHomepage from './forbiddenLands'
import Homepage from './home/homepage'
import PageNotFound from './home/PageNotFound'
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
      <Route exact path="/forbiddenlands">
        <FLHomepage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
