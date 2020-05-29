import React from 'react'

const TopTen = ({ countries = [] }) =>{
  return (
    <div>
      {countries.map(ctry => (
        <div className="country-container" key={ctry.id}>
          <img src={ctry.flag} alt={ctry.name}/>
          <h3>{ctry.country}</h3>
        </div>
      ))}
    </div>
  )
}

export default TopTen
