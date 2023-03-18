import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
=======
import BuhurtTimekeeper from './buhurtTimekeeper'
import FLHomepage from './forbiddenLands'
>>>>>>> 65ffede9a014cdf883d1cecca92ca10161701fae
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
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
