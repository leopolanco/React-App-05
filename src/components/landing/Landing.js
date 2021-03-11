import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../auth/Login'
import {loadUser} from '../../actions/auth'

const Landing = ({ isAuthenticated, loadUser }) => {
  useEffect(() => {
    loadUser()
  }, [loadUser])
  if (isAuthenticated) {
    return <Redirect to='/adminDashboard' />
  }

  const divStyle = {
    textAlign: 'center'
  }
  const subtitle = {
    color:'gray',
    margin:20
  }
  return (
    <div style={divStyle}>
      <h1>Welcome</h1>
      <Login />
    <div style={subtitle}>If loading is slow, please wait for herokuapp to wake up</div>

    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
  // calls isAuth from the state
})

export default connect(mapStateToProps, {loadUser})(Landing)
