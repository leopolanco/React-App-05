import axios from 'axios'

// get all pages
export const getPages = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://rob-test-server.herokuapp.com/api/pages'
    )
    dispatch({
      type: 'GET_PAGES',
      payload: data
    })
  } catch (err) {
    console.error(err)
  }
}

// add a page
export const addPage = (pageName) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const { data } = await axios.post(
      `https://rob-test-server.herokuapp.com/api/pages`,
      pageName,
      config
    )
    dispatch({
      type: 'ADD_PAGES',
      payload: data
    })
    // Get all the pages after creating a new page
    dispatch(getPages())
  } catch (err) {
    console.error(err)
  }
}
// get a page
export const getPage = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://rob-test-server.herokuapp.com/api/pages/${id}`
    )
    dispatch({
      type: 'GET_PAGE',
      payload: data
    })
  } catch (err) {
    console.error(err)
  }
}

// delete a page
export const deletePage = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://rob-test-server.herokuapp.com/api/pages/${id}`)
    dispatch({
      type: 'DELETE_PAGE',
      payload: id
    })
  } catch (err) {
    console.error(err)
  }
}
