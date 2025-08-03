import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './WeatherApp.css'

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { user, logout } = useAuth()

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'c60ed326471faf710f0cd413433c8458'

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`City "${cityName}" not found. Try with country code (e.g., "Chalakudy, IN" or "Chalakudy, Kerala, India")`)
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.')
        } else {
          throw new Error('Unable to fetch weather data. Please try again.')
        }
      }
      
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city.trim())
    }
  }

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  return (
    <div className="weather-app">
      <div className="container">
        <div className="header">
          <h1>Weather App</h1>
          <div className="user-info">
            <span>Welcome, {user?.username}!</span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter city name (e.g., Chalakudy, Kerala or London, UK)..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weatherData.name}, {weatherData.sys.country}</h2>
              <img 
                src={getWeatherIcon(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
                className="weather-icon"
              />
            </div>
            
            <div className="weather-info">
              <div className="temperature">
                <span className="temp-value">{Math.round(weatherData.main.temp)}°C</span>
                <span className="temp-description">{weatherData.weather[0].description}</span>
              </div>
              
              <div className="weather-details">
                <div className="detail">
                  <span className="label">Feels like:</span>
                  <span className="value">{Math.round(weatherData.main.feels_like)}°C</span>
                </div>
                <div className="detail">
                  <span className="label">Humidity:</span>
                  <span className="value">{weatherData.main.humidity}%</span>
                </div>
                <div className="detail">
                  <span className="label">Wind Speed:</span>
                  <span className="value">{weatherData.wind.speed} m/s</span>
                </div>
                <div className="detail">
                  <span className="label">Pressure:</span>
                  <span className="value">{weatherData.main.pressure} hPa</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {!weatherData && !loading && !error && (
          <div className="welcome">
            <p>Enter a city name to get the current weather information</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherApp
