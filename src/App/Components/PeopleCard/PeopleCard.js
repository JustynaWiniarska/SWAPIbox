import React from 'react'
import './PeopleCard.css'

export const PeopleCard = ({name, homeworld, species, population, handleFav}) => {
  console.log(handleFav)
  return (
    <div className='card people'>
      <h3 className="name-field">{name}</h3>
      <h5 className="homeworld-field">Homeworld: {homeworld}</h5>
      <h5 className="species-field">Species: {species}</h5>
      <h5 className="population-field">Population: {population}</h5>
      <button className="like-btn"
              onClick={()=>{handleFav(name)}}
      >Favorite</button>
    </div>
  )

}
