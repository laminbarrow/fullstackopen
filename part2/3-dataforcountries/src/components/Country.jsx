import Weather from './Weather';

export default function Country ({country}){
    console.log(country)
    return (
        <div>
            <h3>{country.name.common}</h3>
            <p>
                Capital: {country.capital[0]} <br />
                Area: {country.area}
            </p>

            <h5>Languages</h5>
            <ul>
                {
                    //object entries from destructured object
                    Object.entries(country.languages)
                        .map(([key,val], i) => {
                            console.log(i, key, val)
                            return <li key={key}>{val}</li>
                        })
                        
                }
            </ul>
            <img width="200" src={country.flags['png']} alt={country.flags['alt']} />

            <Weather country={country} />
        </div>
    )
}