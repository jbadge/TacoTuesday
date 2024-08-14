import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { NewRestaurant } from './pages/NewRestaurant'
import { Restaurants } from './pages/Restaurants'
import { Restaurant } from './pages/Restaurant'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import avatar from '../src/images/avatar.png'
import { getUser, isLoggedIn } from './types/auth'
import SignedOutNav from './components/SignedOutNav'
import LoggedInNav from './components/LoggedInNav'

export function App() {
  const user = getUser()
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>{isLoggedIn() ? <LoggedInNav /> : <SignedOutNav />}</nav>
          </li>
          {isLoggedIn() ? (
            <li className="avatar">
              <img
                src={avatar}
                alt={`${user.fullName} Avatar`}
                height="64"
                width="64"
              />
            </li>
          ) : null}
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/new" element={<NewRestaurant />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path='/restaurant/:id/edit' element={<EditRestaurant/>}/> */}
      </Routes>

      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
