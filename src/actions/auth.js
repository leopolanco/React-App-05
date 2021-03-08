import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

// load user
// to always send the auth header when the user loads (just registered or after login)
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('http://192.168.1.11:5000/api/auth')
    dispatch({
      type: 'USER_LOADED',
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR' // when theres an error
    })
  }
}

// login
export const adminLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password }) // preparing before sending
  try {
    const res = await axios.post(
      // just making a call to auth endpoint for authorization
      'http://192.168.1.11:5000/api/auth',
      body,
      config
    )
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    })
    dispatch(loadUser())
  } catch (err) {
    const errs = err.response.data.errors
    if (errs) {
      // loop for each errors and display them
      errs.forEach((error) => console.log(error.msg))
    }
    dispatch({
      type: 'LOGIN_FAIL'
    })
  }
}
