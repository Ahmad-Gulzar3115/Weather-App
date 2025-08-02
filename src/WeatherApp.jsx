import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Multan",
        feelsLike: 39.39,
        humidity: 48,
        temp: 34.77,
        tempMax: 34.77,
        tempMin: 34.77,
        weather: "broken clouds"
    });
let updateInfo =(newInfo)=>{
setWeatherInfo(newInfo); 
}

    return (
        <div>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}