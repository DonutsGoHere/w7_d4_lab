import React, { useEffect, useState } from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';
import Country from '../components/Country';

const CountriesBox = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [favCountries, setFavCountries] = useState([])

  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = function () {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }

  const onCountryClick = function(country) {
    setSelectedCountry(country);
  }

  const onFavClick = function (country){
    setFavCountries(favCountries);
  }

  return (
    <>
      <>{selectedCountry ? <CountryDetails selectedCountry={selectedCountry}/> : null}</>
      <CountriesList countries={countries} onCountryClick={onCountryClick} onFavClick ={onFavClick}/>
    </>
  )
}


export default CountriesBox;