import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPage } from '../../actions/pages'

const AppNotDownloaded = ({ match, getPage, page: { page } }) => {
  useEffect(() => {
    getPage(match.params.id)
  }, [getPage])

  return page === null ? (
    <>Loading...</>
  ) : (
    <>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>
      <h1>You don't have our App</h1>

      <div>This page is for: {page.pageName}</div>
    </>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(AppNotDownloaded)
