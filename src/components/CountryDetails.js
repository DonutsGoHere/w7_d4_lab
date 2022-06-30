
import React from 'react';
import CountriesBox from '../containers/CountriesBox';

const CountryDetails = ({selectedCountry}) => {
  return (
      
      <div>
          <h3>{selectedCountry.name.official}</h3>
          <p>{selectedCountry.capital}</p>
          <p>{selectedCountry.region}</p>
          <p>{selectedCountry.caa3}</p>
      </div>
  )
}

export default CountryDetails;