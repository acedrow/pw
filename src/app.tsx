import GlobalStyle from './styles/globalStyle'
import Homepage from './home/homepage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/test">
          <div>IM A TEST PAGE!</div>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
