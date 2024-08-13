import Country from "./Country"

const Countries = ({ countries, setSearchValue }) => {

  if( countries.length === 1){
    return <Country country={countries[0]} />
  }

  if (countries.length > 10) {
    return "Too many matches, specify another filter"
  }

  return countries.map((country) => {
    return (
      <>
        <div key={country.name.official}>
            {country.name.common} 
            <button onClick={() => setSearchValue(country.name.common)}>
              show
            </button>
        </div>
      </>
    )
  })
}

export default Countries