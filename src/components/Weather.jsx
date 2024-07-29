import './Weather.css'
import search_icon from '../assets/search.png'
function Weather() {
  return (
    <div>
      <input id="search" type="text" placeholder='Search'/>
      <img src={search_icon} alt=""/>
    </div>
  )
}

export default Weather
