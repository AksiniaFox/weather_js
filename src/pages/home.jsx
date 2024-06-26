import { useState, useContext } from 'react';
import {WeatherContext} from '../context/WeatherContext.jsx'

import WeatherCarousel from "../components/WeatherCarousel/WeatherCarousel.jsx"
import weatherImages from "../assets/icons/weather/Weather_condition.jsx"
import './home.css'


export default function Home() {

  const {weatherHour, weatherDays} = useContext(WeatherContext)



  const weatherData = [
    { time: '13:00', condition: 'Солнечно', temperature: '29°C', day: '25 июня' },
    { time: '14:00', condition: 'Облачно', temperature: '30°C', day: '26 июня' },
    { time: '15:00', condition: 'Дождь', temperature: '18°C', day: '27 июня' },
    { time: '16:00', condition: 'Солнечно', temperature: '18°C', day: '28 июня' },
    { time: '17:00', condition: 'Дождь', temperature: '18°C', day: '29 июня' },
    { time: '13:00', condition: 'Солнечно', temperature: '29°C', day: '30 июня' },
    { time: '14:00', condition: 'Облачно', temperature: '30°C', day: '1 июля' },
    { time: '13:00', condition: 'Солнечно', temperature: '29°C', day: '2 июля' },
    { time: '14:00', condition: 'Облачно', temperature: '30°C', day: '3 июля' },
  ]

  return (
    <div className='wrapper_weather'>
    
    
    <div className='current_time'>

        {weatherHour ? <>
          <h1 className='text_header'>Weather now in Moscow</h1>
          <div className='weather_blocks'>
            <img src= {weatherImages[weatherHour[0].condition]} className='logo' alt=''/>
            <h2 className='weather_text'> {weatherHour[0].condition} </h2>
            <h2 className='weather_degree'> {Math.round(weatherHour[0].temperature)} °C</h2>
          </div>
          <WeatherCarousel data={weatherDays} />
          </>:<>
          Ошибка
        </>}

    </div>

    <div className='other_time'>
        <h1 className='text_header'>Other's days weater</h1>
        
        

        {weatherDays.map((item, idx) => (
            <div className='day_blocks' key={idx}>
                <div>
                    <h3>{item.day}  {item.time}</h3>
                    <img src = {weatherImages[weatherDays[idx].condition]} className='logo_small' alt=''/>
                    <p>{item.condition}</p>
                    <p>{Math.round(item.temperature)} °C</p>
                </div>
            </div>
        ))}
        
        
        
    </div>

    

</div>
  );
}

