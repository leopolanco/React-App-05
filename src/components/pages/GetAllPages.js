import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPages, deletePage } from '../../actions/pages'

const GetAllPages = ({ page: { pages }, getPages, deletePage }) => {
  useEffect(() => {
    getPages()
  }, [getPages])
  return page === null ? (
    <>Loading...</>
  ) : (
    <>
      <h3>Pages Available</h3>
      {pages.map((page) => (
        <div key={page._id}>
          <strong>{page.pageName}</strong>
          <Link to={`/pages/${page.pageName}`}>
            <button type='button'>View this page</button>
          </Link>
          <button type='button' onClick={() => deletePage(page._id)}>
            X
          </button>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPages, deletePage })(GetAllPages)
