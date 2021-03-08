import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPage } from '../../actions/pages'

const ViewPage = ({ match, getPage, page: { page } }) => {
  useEffect(() => {
    getPage(match.params.id)
  }, [getPage])

  const divStyle = {
    'text-align': 'center'
  }
  return page === null ? (
    <>Loading...</>
  ) : (
    <div style={divStyle}>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>

      <div>This page is for: {page.pageName}</div>

      {/* THIS IS FOR THE DEEP LINKING FIREBASE */}
      <button type='button'>Share this page</button>

      <div>{page.shareLink}</div>
      {/* THIS IS FOR THE DEEP LINKING FIREBASE */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(ViewPage)
