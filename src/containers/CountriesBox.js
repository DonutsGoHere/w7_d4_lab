import React, { useEffect, useState } from 'react';
import CountriesList from '../components/CountriesList';


const CountriesBox = () => {
  const [countries, setCountries] = useState([])


  const getCountries = function () {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }

  useEffect(() => {
    getCountries();
  }, [])

  return (
    <>
      <CountriesList countries = {countries} />
    </>
  )
}


export default CountriesBox;