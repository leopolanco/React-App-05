import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adminLogin } from '../../actions/auth'

const Login = ({ adminLogin }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = userData
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    adminLogin(email, password)
  }
  return (
    <>
      <h3>Login as Admin</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='email'
            autoComplete='on'
            value={email}
            onChange={handleInput}
            placeholder='email'
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            autoComplete='on'
            value={password}
            onChange={handleInput}
            placeholder='password'
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </>
  )
}

export default connect(null, { adminLogin })(Login)
