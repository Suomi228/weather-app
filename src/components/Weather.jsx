import './Weather.css'
import search_icon from '../assets/search.png'
function Weather() {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input id="id" type="text" placeholder='Search'/>
        <img src={search_icon} alt=""/>
      </div>
    </div>
  )
}

export default Weather
