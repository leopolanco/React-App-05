import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPage } from '../../actions/pages'

const AppNotDownloaded = ({ match, getPage, page: { page } }) => {
  useEffect(() => {
    let id = match.params.id ? match.params.id : ''
    getPage(id)
  }, [getPage, match])

  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>
      <h1>You don't have our App</h1>
      <br />
      {page && <div>This page is for {page.pageName}</div>}
      <br/>
      <a
        href='https://play.google.com/store/apps/details?id=com.instagram.android'
        target='_blank'
        rel='noreferrer noopener'
      >
        <button>Download</button>
      </a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(AppNotDownloaded)
