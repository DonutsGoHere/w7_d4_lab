import React from "react";
import Country from "./Country"
import CountryDetails from "./CountryDetails";

const CountriesList = ({countries, onCountryClick, onFavClick}) => {
    let totalPopulation = 0

  const countriesItems = countries.map((country) => {
    
    totalPopulation = totalPopulation + country.population

    return( <Country key={country.cca3} country={country} onCountryClick={onCountryClick} onFavClick={onFavClick} />)


  })

  return (
    <>
    <h1>World population: {totalPopulation}</h1>
    {countriesItems}
    </>
  )

}
export default CountriesList;