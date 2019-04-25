/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
/* eslint-enable no-unused-vars */
import Splash from './Splash'
import Map from './Map'

/**
 * Router for client side routing of the frontend application
 */
export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/map" component = {Map}/>
      </Switch>
    )
  }
}
