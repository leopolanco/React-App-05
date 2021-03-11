import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPage } from '../../actions/pages'

const ViewPage = ({ match, getPage, page: { page } }) => {
  let id = match.params.id
  useEffect(() => {
    getPage(id)
  }, [getPage, id])

  const divStyle = {
    textAlign: 'center'
  }
  return page === null ? (
    <>Loading...</>
  //Sometimes we navigate faster than the speed that the api return the pagename
  //We'll use a loading text while we wait
  ) : id !== page.pageName ? (
    <>Loading...</>
  ) : (
    <div style={divStyle}>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>
      <div>This page is for: {page.pageName}</div>
      <br />
      <button type='button'>
        <a
          href='https://robtest.page.link/nPwh'
          target='_blank'
          rel='noreferrer noopener'
        >
          Share this page
        </a>
      </button>
      <div>{page.shareLink}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(ViewPage)
