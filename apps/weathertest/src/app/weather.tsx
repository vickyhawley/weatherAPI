import React from 'react'
import './weather.css'
import DataFetching from '@weather/weather';

const Weather = () => {
    return (
     
        <div className='container rounded shadow flex main'>
        <h1 className="title">What's the weather like?</h1>
       
           

            <div className="container">
                <div className="userInput">
                    <label htmlFor="name"><h1 className='header' >Enter Location</h1></label>
                    <input className='container shadow rounded' type='text' id='name' name='name' required></input>
                </div>
              <DataFetching />
            </div>
        </div>

    )
};

export default Weather;