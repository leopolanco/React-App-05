const initialState = {
  pages: [],
  page:null,
  pageName: '',
  shareLink: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PAGES':
      return {
        ...state,
        pages: payload,
      }
    case 'GET_PAGE':
      return {
        ...state,
        page: payload
      }
    case 'ADD_PAGE':
      return {
        ...state,
        pageName: [payload, ...state.pages]
      }
    case 'DELETE_PAGE':
      return {
        ...state,
        pages: state.pages.filter((page) => page._id !== payload)
        // remove the page that matches the id
      }
    default:
      return state
  }
}
