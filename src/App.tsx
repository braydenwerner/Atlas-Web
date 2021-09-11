import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Nav } from './components'
import { Home, PrivacyPolicy } from './pages'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
