import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState(null)
    //const api_key = import.meta.env.VITE_WEATHER_KEY
    const apiKey = import.meta.env.VITE_WEATHER_KEY 

    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}&units=metric`)
        .then(response => {
            setWeatherInfo(response.data)
        })
        .catch(error => {
          console.log(error)
          alert('An error occurred when fetching the API data. Please look in to the console for details')
        });

    },[])

    if(!weatherInfo){
        return null
    }

    return(
        <>
            <h5>Weather in {country.capital[0]}</h5>
            <p>
                Temperature {weatherInfo.main.temp} Celsius
            </p>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt='weather info' />
            <p>
                Wind {weatherInfo.wind.speed} m/s
            </p>
        </>
    )
}

export default Weather