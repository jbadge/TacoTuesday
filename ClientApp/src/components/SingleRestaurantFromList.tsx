import React from 'react'
import { CSSStarsProperties, RestaurantType } from '../types/types'

export function SingleRestaurantFromList({
  restaurant,
}: {
  restaurant: RestaurantType
}) {
  return (
    <li>
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
  )
}
