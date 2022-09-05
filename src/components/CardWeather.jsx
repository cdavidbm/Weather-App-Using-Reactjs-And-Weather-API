import React, { useState, useEffect } from 'react';
import useWeatherAPI from './useWeatherAPI';
import './CardWeather.css'


const CardWeather = () => {
    const { 
        data: weather, 
        isMetric, 
        setIsMetric, 
        setLocation } = useWeatherAPI()

    return (
        <div className='main-container'>

            <div className='card-weather'>
                <section>
                    <h1>The current weather</h1>
                    <h2>Location: {weather?.name} - {weather?.sys?.country}</h2>
                </section>
                <section className='flex-horizontal'>
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                    <ul className='weather-details'>
                        <li>
                            <span className='description'>"{weather?.weather[0].description}"</span>

                        </li>
                        <li>
                            <span className="material-symbols-outlined">device_thermostat</span>
                            <span><strong>Temp max: </strong>{weather?.main.temp_max} {isMetric ? '°C' : '°F'}</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">device_thermostat</span>
                            <span><strong>Temp min: </strong>{weather?.main.temp_min} {isMetric ? '°C' : '°F'}</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">air</span>
                            <span><strong>Wind Speed</strong>: {weather?.wind.speed} m/s</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">cloudy</span>
                            <span><strong>Clouds: </strong>{weather?.clouds.all} %</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">humidity_mid</span>
                            <span><strong>Humidity: </strong>{weather?.main.humidity} %</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">tire_repair</span>
                            <span><strong>Pressure: </strong>{weather?.main.pressure} hPa</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>{weather?.main.temp} {isMetric ? '°C' : '°F'}</h2>
                </section>
                <section>
                    <button onClick={() => { setIsMetric(!isMetric) }} className='btn-degrees'>Convert °C - °F</button>
                </section>
            </div>
        </div>


    );
};

export default CardWeather;