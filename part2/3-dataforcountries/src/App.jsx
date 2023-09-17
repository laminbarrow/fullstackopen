import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries';
import SearchFilter from './components/SearchFilter';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [apiCountries, setApiCountries] = useState([])

    useEffect(() => {
      // run when country is set
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setApiCountries(response.data)
        })
        .catch(error => {
          console.log(error)
          alert('An error occurred when fetching the API data. Please look in to the console for details')
        });
    }, []);

  
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredCountries = searchValue ? apiCountries.filter(country => {
      return country.name.common.toLowerCase().includes(searchValue.toLowerCase());
  })
  : []
  
  return (
    <>
      <h1>Data for countries</h1>
      <SearchFilter searchValue={searchValue} handleSearchValue={handleSearchValue} />
      <Countries countries={filteredCountries} setSearchValue={setSearchValue} />
    </>
  )
}

export default App
