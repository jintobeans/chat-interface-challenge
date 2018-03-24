import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import { Main, Home } from './components'

class Routes extends Component {

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Routes)
