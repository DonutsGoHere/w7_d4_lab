import React from "react";

const Country = ({country, onCountryClick, onFavClick}) => {

  const handleClick = function(){
    onCountryClick(country)
  }

  const handleFavClick =  () =>{
    onFavClick(country)
  }

  return (
    <>
      <h2 onClick={handleClick}>{country.name.official}</h2>
      <button onClick={handleFavClick} type = "button">add fav</button>
    </>
  )
}
export default Country;