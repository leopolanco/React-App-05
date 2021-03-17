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

  const copyTextToClipboard = (e) => {
    var copyTextarea = document.querySelector('.js-copytextarea')
    copyTextarea.value = e.target.value
    copyTextarea.focus()
    copyTextarea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.log('Oops, unable to copy')
    }
  }

  return page === null ? (
    <>Loading...</>
  ) : //Sometimes we navigate faster than the speed that the api return the pagename
  //We'll use a loading text while we wait
  id !== page.pageName ? (
    <>Loading...</>
  ) : (
    <div style={divStyle}>
      <Link to='/adminDashboard'>Go to admin dashboard</Link>
      <div>This page is for: {page.pageName}</div>
      <br />
      <button
        type='button'
        value={page.shareLink}
        onClick={copyTextToClipboard}
      >
        Share this page
      </button>
      <div>
        <textarea class='js-copytextarea' value={page.shareLink} />
      </div>
      <br />
      <button>
        <a href={page.shareLink} target='_blank' rel='noreferrer noopener'>
          Open this page in our app
        </a>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { getPage })(ViewPage)
