import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to='/home'><i>Home</i></Link>
        <Link to='/about'><i>About</i></Link>
    </div>
  )
}

export default NavBar