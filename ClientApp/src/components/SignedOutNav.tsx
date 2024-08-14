import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutNav = () => {
  return (
    <>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  )
}

export default SignedOutNav
