import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPage } from '../../actions/pages'

const Create = ({ addPage }) => {
  const [pageName, setPageName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addPage({ pageName })
  }

  const buttonStyle = {
    width: '60%',
    padding:'20px'
  }
  const inputStyle= {
    width: '58.5%',
    padding:'10px'
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            placeholder='Create page'
            style={inputStyle}
          />
          <br />
          <button type='submit' style={buttonStyle}>
            Create
          </button>
        </form>
      </div>
    </>
  )
}

export default connect(null, { addPage })(Create)
