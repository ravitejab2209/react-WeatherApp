import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "83918c2c79c09c061870fe96545341c5";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: (jsonResponse.main.temp - 273.15).toFixed(2),
                tempMin: (jsonResponse.main.temp_min- 273.15).toFixed(2),
                tempMax: (jsonResponse.main.temp_max- 273.15).toFixed(2),
                humidity: jsonResponse.main.humidity,
                feelsLike: (jsonResponse.main.feels_like- 273.15).toFixed(2),
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;
        }catch(error){
            throw error;
        }

        
    }

    let handleChange = async (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }catch(error){
            setError=true;
        }
       
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange} /> <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No Such Place exists!</p>}
            </form>
        </div>
    )
}
