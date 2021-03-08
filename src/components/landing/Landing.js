import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../auth/Login'
import {loadUser} from '../../actions/auth'

const Landing = ({ isAuthenticated, loadUser }) => {
  useEffect(() => {
    loadUser()
  }, [])
  if (isAuthenticated) {
    return <Redirect to='/adminDashboard' />
  }
  return (
    <>
      <h1>Welcome</h1>
      <Login />
    </>
  )
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
  // calls isAuth from the state
})

export default connect(mapStateToProps, {loadUser})(Landing)
