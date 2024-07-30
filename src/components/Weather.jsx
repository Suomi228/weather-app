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
import { useState } from 'react'
import axios from 'axios';

function Weather() {


  const [wheatherData, setwheatherData] = useState(false);
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    search(searchTerm);
    event.preventDefault();
  };
  const search = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`)
      const data = response.data;
      console.log(data)
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setwheatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
    })

    }
    catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }
  useEffect(()=>{
    search('Moscow') 
  },[])

  return (
    <div className='weather'>
        <div className='search-bar'>
          <input id="id" type="text" placeholder='Search' onChange={handleSearchInput}/>
          <img src={search_icon} alt="" onClick= {handleSearchSubmit}/>
        </div>
      
      <img src={wheatherData.icon} alt="" className='weather-icon'/>
      <p className='temperature'>{wheatherData.temperature}°C</p>
      <p className='location'>{wheatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" className='icon'/>
          <div>
            <p>{wheatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" className='icon'/>
          <div>
            <p>{wheatherData.windSpeed} Km/h</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
