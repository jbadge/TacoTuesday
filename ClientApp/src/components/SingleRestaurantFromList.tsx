import React from 'react'
import { CSSStarsProperties, RestaurantType } from '../types/types'
import { Link } from 'react-router-dom'

export function SingleRestaurantFromList({
  restaurant,
}: {
  restaurant: RestaurantType
}) {
  return (
    <li>
      <h2>
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
      </h2>
      <p>
        <span
          className="stars"
          style={{ '--rating': 4.7 } as CSSStarsProperties}
          aria-label="Star rating of this location is 4.7 out of 5."
        ></span>
        {restaurant.reviews.length}
      </p>
      <address>{restaurant.address}</address>
    </li>
  )
}
