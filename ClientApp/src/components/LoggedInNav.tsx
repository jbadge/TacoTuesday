import React from 'react'
import { Link } from 'react-router-dom'
import { getUser, logout } from '../types/auth'

const LoggedInNav = () => {
  const user = getUser()

  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  return (
    <>
      <Link to="/new">
        <i className="fa fa-plus"></i> Restaurant
      </Link>
      <a
        href="/"
        className="link"
        onClick={function (event) {
          event.preventDefault()
          handleLogout()
        }}
      >
        Sign out
      </a>
      <p>Welcome back, {user.fullName}!</p>
    </>
  )
}

export default LoggedInNav
