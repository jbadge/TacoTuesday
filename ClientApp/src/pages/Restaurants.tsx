import React from 'react'
import { useQuery } from 'react-query'

import map from '../images/map.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import { CSSStarsProperties, RestaurantType } from '../types/types'

export function Restaurants() {
  const { data: restaurants = [] } = useQuery<RestaurantType[]>(
    'restaurants',
    async function () {
      const response = await fetch('/api/restaurants')
      return response.json()
    }
  )

  return (
    <main className="home">
      <h1>
        <img src={tacoTuesday} alt="Taco Tuesday" />
      </h1>
      <form className="search">
        <input type="text" placeholder="Search..." />
      </form>

      <section className="map">
        <img alt="Example Map" src={map} />
      </section>

      <ul className="results">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>
              <span
                className="stars"
                style={{ '--rating': 4.7 } as CSSStarsProperties}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span>
              (2,188)
            </p>
            <address>{restaurant.address}</address>
          </li>
        ))}
      </ul>
    </main>
  )
}
