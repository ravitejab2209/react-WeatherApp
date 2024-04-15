import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        feelsLike: 25.84,
        temp: 24.80,
        tempMin: 23.90,
        tempMax: 24.80,
        humidity: 69,
        weather: "clear sky",
    });

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Raviteja <ThunderstormIcon /></h2>
            < SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}