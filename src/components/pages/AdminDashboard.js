import React from 'react'
import Create from './CreatePage'
import GetAllPages from './GetAllPages'

const AdminDashboard = () => {
  const dashboardStyle = {
    'text-align': 'center'
  }
  return (
    <div style={dashboardStyle}>
      <h1>Admin page</h1>
      <Create />
      <GetAllPages />
    </div>
  )
}

export default AdminDashboard
