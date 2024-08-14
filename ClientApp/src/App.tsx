import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { NewRestaurant } from './pages/NewRestaurant'
import { Restaurants } from './pages/Restaurants'
import { Restaurant } from './pages/Restaurant'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'

import { isLoggedIn } from './types/auth'
import SignedOutNav from './components/SignedOutNav'
import SignedInNav from './components/SignedInNav'

export function App() {
  return (
    <>
      <header>{isLoggedIn() ? <SignedInNav /> : <SignedOutNav />}</header>

      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/new" element={<NewRestaurant />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
