import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Navigation
