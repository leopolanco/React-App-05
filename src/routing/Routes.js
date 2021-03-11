import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppNotDownloaded from '../components/errors/AppNotDownloaded'
import NotFound from '../components/errors/NotFound'
import AdminDashboard from '../components/pages/AdminDashboard'
import ViewPage from '../components/pages/ViewPage'

import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <Switch>
    <PrivateRoute exacth path='/adminDashboard' component={AdminDashboard} />
    <Route exacth path='/pages/:id' component={ViewPage} />
    <Route exacth path='/appNotDownloaded/:id' component={AppNotDownloaded} />
    <Route exacth path='/appNotDownloaded' component={AppNotDownloaded} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
