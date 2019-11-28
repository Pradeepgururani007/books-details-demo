import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_URL,
  DETAILS_PAGE_URL,

} from './constants/url'

import Home from './containers/HomePage'
import DetailsPage from './containers/DetailsPage'

const Routes = () => (
  <Switch>    
    <Route exact path={HOME_PAGE_URL} component={Home} />
    <Route exact path={DETAILS_PAGE_URL} component={DetailsPage} />
  </Switch>
)

export default Routes
