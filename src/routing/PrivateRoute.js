import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// bring connect to access auth route
// for checking auth

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated},
  // destructure auth
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? (
        // if it is not authenticated, bring the user to
        // login, if he is authenticated, open the component
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    }
  />
)

const mapStateToProps = (state) => ({
  auth: state.auth
  // bring this into private route for checking auth
})

export default connect(mapStateToProps)(PrivateRoute)
