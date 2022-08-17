import React, { useState } from 'react'
import './weather.css'


import { WeatherData } from '@weather/api';

const api = {
    key:'45185b5e8a7f944eef598a5d36fde903',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    

    const search = evt => {
        if (evt.key === 'Enter'){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
            setQuery('')
            console.log(result);
        });
    }
    }


     const dateBuilder = (d) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day=days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
     }
    return (
     
        <div className='container rounded shadow flex main'>
        <h1 className="title">What's the weather like?</h1>
       
           

            <div className="container">
                <div className="userInput">
                    <input className='shadow rounded' type='text' id='name' name='name' placeholder='Enter a city' onChange={e=> setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                     required></input>
                    <input className='submitBtn button-pill' type='submit' value='Submit'></input>
                </div>

                { weather ? (<div className="weather-box container">
                <div className='display'>
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                    <div className="temp">
                        {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>) : ('')}
                
             
            </div>
        </div>

    )
};

export default Weather;