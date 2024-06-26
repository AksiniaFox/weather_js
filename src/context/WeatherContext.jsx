import { createContext, useState, useEffect } from "react";
import React from 'react';
import $api from '../app/api.js'
import config from "../config.js";


export const WeatherContext = createContext({})

const WeatherProvider = ({children}) => {
    
    const [isAppReady1,setIsAppReady1] = useState(false)
    const [isAppReady2,setIsAppReady2] = useState(false)

    const [weatherHour,setWeatherHour] = useState()
    const [weatherDays,setWeatherDays] = useState()


    useEffect(() => {
        

        $api.get("https://api.openweathermap.org/data/2.5/weather?lat=55.748814&lon=37.537525&appid=45cce6245a077d8ca3e0b4f517616bad&units=metric")
            .then((res1) => { 

                console.log(res1)
                let hour

                hour = [{ condition: res1.data.weather[0].main, temperature: res1.data.main.temp},]
                console.log(hour)
                




                setWeatherHour(hour)
                setIsAppReady1(true)
            }).catch((e)=>{
                console.log(e)

                setWeatherHour(null)
                setIsAppReady1(true)
            })
            
        $api.get("https://api.openweathermap.org/data/2.5/forecast?lat=55.748814&lon=37.537525&appid=45cce6245a077d8ca3e0b4f517616bad&units=metric")
            .then((res2) => {
                console.log(res2)
                let days =[]

                for (let i = 0; i < 9; i++) {
                    
                    days.push({
                        time: res2.data.list[i].dt_txt.split(' ')[1].substring(0, 5), condition: res2.data.list[i].weather[0].main, temperature: res2.data.list[i].main.temp, day: res2.data.list[i].dt_txt.split(' ')[0].split('-').slice(1).reverse().join('.')
                    })
                    
                }
                console.log(days)
                setWeatherDays(days)
                setIsAppReady2(true)
            }).catch((e)=>{
                console.log(e)

                setWeatherDays(null)
                setIsAppReady2(true)
            })
        

            
        
    },[])

    return (
        <WeatherContext.Provider
            value={{
                weatherHour,
                weatherDays,

                
            }}
        >   
        {isAppReady1 && isAppReady2 ? (children) : <h1>Загрузка...</h1>}
        </WeatherContext.Provider>
    )

}
export default WeatherProvider