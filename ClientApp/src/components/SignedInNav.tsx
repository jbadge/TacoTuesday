import React from 'react'
import { Link } from 'react-router-dom'
import { getUser, logout } from '../types/auth'
import avatar from '../images/avatar.png'

const SignedInNav = () => {
  const user = getUser()

  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  return (
    <ul>
      <li>
        <nav>
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
        </nav>
      </li>

      <li className="avatar">
        <img
          src={avatar}
          alt={`${user.fullName} Avatar`}
          height="64"
          width="64"
        />
      </li>
    </ul>
  )
}

export default SignedInNav
