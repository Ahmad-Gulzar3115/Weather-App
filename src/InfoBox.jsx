import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1589929495919-05051292c361?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    // let info = {
    //     city: "Multan",
    //     feelsLike: 39.39,
    //     humidity: 48,
    //     temp: 34.77,
    //     tempMax: 34.77,
    //     tempMin: 34.77,
    //     weather: "broken clouds"
    // };

    return (
        <div className='infobox'>
            {/* <h1>WeatherInfo -{info.weather} </h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL:info.temp>15 ? HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                            info.humidity>80 ?
                             <ThunderstormIcon/> :info.temp>15 ?
                              <SunnyIcon/>:<AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                       <p>Temprature ={info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}</p>
                       <p>Min Temp ={info.tempMin}</p>
                       <p>Max Temp ={info.tempMax}</p>
                       <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

                    </Typography>
                </CardContent>
            </Card>

            </div>
        </div>
    );
}