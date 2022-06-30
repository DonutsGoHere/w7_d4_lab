import React from "react";
import Country from "./Country";

const CountriesList = ({countries}) => {

  const countriesItems = countries.map((country) => {
    return( <Country key={country.cca3} country={country} />)

  })

  return (
    <>
      {countriesItems}
    </>
  )

}
export default CountriesList;