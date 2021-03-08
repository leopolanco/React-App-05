import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPages, deletePage } from '../../actions/pages'

const GetAllPages = ({ page: { pages }, getPages, deletePage }) => {
  useEffect(() => {
    getPages()
  }, [getPages])

  const buttonStyle = {
    padding: '15px',
    width: '200px',
    'word-break': 'break-all'
  }
  const crossStyle = {
    padding: '15px'
  }
  return pages === null ? (
    <>Loading...</>
  ) : (
    <>
      <h3>Pages Available</h3>
      {pages.map((page) => (
        <div key={page._id}>
          <Link to={`/pages/${page.pageName}`}>
            <button type='button' style={buttonStyle}>
              Page for {page.pageName}
            </button>
          </Link>
          <button
            type='button'
            style={crossStyle}
            onClick={() => deletePage(page._id)}
          >
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
