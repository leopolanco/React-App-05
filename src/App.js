import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './components/landing/Landing'
import Routes from './routing/Routes'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Router>
  </Provider>
)

export default App
