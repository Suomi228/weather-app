import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import humidity_icon from '../assets/humidity.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import { useEffect } from 'react'
import axios from 'axios';

function Weather() {

  const search = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`)
      
      console.log(response.data)
    }
    catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }
  useEffect(()=>{
    search('London') 
  },[])

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input id="id" type="text" placeholder='Search'/>
        <img src={search_icon} alt=""/>
      </div>
      <img src={clear_icon} alt="" className='weather-icon'/>
      <p className='temperature'>25°C</p>
      <p className='location'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" className='icon'/>
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" className='icon'/>
          <div>
            <p>3.6 Km/h</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
