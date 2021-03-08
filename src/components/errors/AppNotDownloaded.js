import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPage } from '../../actions/pages'

const AppNotDownloaded = ({ match, getPage, page: { page } }) => {


  let downloadLink = ''
  useEffect(() => {
    getPage(match.params.id)
    console.log(navigator.platform)
    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
      downloadLink =
        'http://play.google.com/store/apps/details?id=com.truecaller&hl=en'
    }
    if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
      downloadLink =
        'http://itunes.apple.com/lb/app/truecaller-caller-id-number/id448142450?mt=8'
    }
  }, [getPage])

  return page === null ? (
    <>Loading...</>
  ) : (
    <>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>
      <h1>You don't have our App</h1>

      <div>This page is for: {page.pageName}</div>

      {downloadLink.length > 1 && (
        <a target='_blank' rel='noopener noreferrer' href={downloadLink}>
          <button type='button'> Click here to download</button>
        </a>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(AppNotDownloaded)
