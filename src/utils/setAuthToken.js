import axios from 'axios'
// We need this header for receiving/sending the token between the client and server
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
