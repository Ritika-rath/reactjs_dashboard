import React from 'react'

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className='sidebar'>
      <h2>Admin Dashboard</h2>
      <ul>
        <li onClick={() => setCurrentPage('Dashboard')}>Dashboard</li>
        <li onClick={() => setCurrentPage('Form')}>Form</li>
      </ul>
    </div>
  )
}

export default Sidebar
