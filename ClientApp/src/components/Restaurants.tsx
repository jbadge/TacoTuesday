import React from 'react'
import { useQuery } from 'react-query'

import map from '../images/map.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import { RestaurantType } from '../types/types'
import { SingleRestaurantFromList } from '../components/SingleRestaurantFromList'

export function Restaurants() {
  const [filterText, setFilterText] = React.useState('')
  const { data: restaurants = [] } = useQuery<RestaurantType[]>(
    ['restaurants', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/restaurants'
          : `/api/restaurants?filter=${filterText}`
      )
      return response.json()
    }
  )

  function canConstruct(ransomNote: string, magazine: string): boolean {
    console.log('################')
    let ransomCopy = ransomNote
    let magCopy = magazine
    // let count = 0
    for (let i = 0; i < ransomNote.length; i++) {
      console.log('for loop, i is', i)
      console.log(ransomCopy, magCopy)
      console.log('ransomCopy length', ransomCopy.length)
      if (magCopy.includes(ransomCopy[i]) && ransomCopy.length > 1) {
        console.log('running')
        console.log('ransomCopy slice', ransomCopy.slice(0, i + 1))
        console.log('mag index', magCopy.indexOf(ransomCopy[i]) + 1)

        magCopy =
          magCopy.slice(i, magCopy.indexOf(ransomCopy[i])) +
          magCopy.slice(ransomCopy.indexOf(ransomCopy[i]) + 1, magCopy.length)

        // magCopy.slice(i, magCopy.indexOf(ransomCopy[i])) +
        // magCopy.slice(ransomCopy.indexOf(ransomCopy[i] + 1), magCopy.length)

        // magCopy.slice(1, magCopy.indexOf(ransomNote[i])) +
        // magCopy.slice(magCopy.indexOf(ransomNote[i]), magCopy.length - 1)

        ransomCopy =
          ransomCopy.slice(i, i) + ransomCopy.slice(i + 1, ransomCopy.length)

        console.log('ransomCopy', ransomCopy)
        console.log('magCopy', magCopy)
        i--
      } else if (magCopy.includes(ransomCopy[i]) && ransomCopy.length <= 1) {
        console.log('here')
        ransomCopy = ''
      }
      // count++
      // console.log('ransomCopy length', ransomCopy.length)
    }
    console.log(ransomCopy.length !== 0 ? false : true)
    return ransomCopy.length !== 0 ? false : true
  }

  React.useEffect(() => {
    canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi')
  }, [])

  return (
    <main className="home">
      <h1>
        <img src={tacoTuesday} alt="Taco Tuesday" />
      </h1>
      <form className="search">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </form>

      <section className="map">
        <img alt="Example Map" src={map} />
      </section>

      <ul className="results">
        {restaurants.map((restaurant) => (
          <SingleRestaurantFromList
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </ul>
    </main>
  )
}
