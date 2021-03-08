const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', payload.token) // put the token if auth success
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
        }
      case 'AUTH_ERROR':
      case 'LOGIN_FAIL':
      case 'LOGOUT':
        localStorage.removeItem('token') // remove token if auth fails
        return {
          ...state,
          token: null,
          isAuthenticated: false,
        }
      case 'USER_LOADED':
        return {
          ...state,
          isAuthenticated: true,
          user: payload
        }
      default:
        return state
    }
  }