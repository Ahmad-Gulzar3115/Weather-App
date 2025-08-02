import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';


export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);


    const API_URL = import.meta.env.VITE_APP_API_URL;
    const API_KEY = import.meta.env.VITE_APP_API_KEY;


    // const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY = "b632d09ab50afecde8c3409498a5af9f";
    // enviorment variavbles like env file

    let getweatherInfo = async () => {

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonReasponse = await response.json();
            //  console.log(jsonReasponse);
            let result = {
                city: city,
                temp: jsonReasponse.main.temp,
                tempMin: jsonReasponse.main.temp_min,
                tempMax: jsonReasponse.main.temp_max,
                humidity: jsonReasponse.main.humidity,
                feelsLike: jsonReasponse.main.feels_like,
                weather: jsonReasponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getweatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained"
                    type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such Place Exists!</p>}
            </form>
        </div>
    );
}