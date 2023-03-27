import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import CurrentWeather from './components/current-weather/CurrentWeather'
import {WEATHER_API_URL, WEATHER_API_KEY} from './api'
import useLocalStorage from 'use-local-storage';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast'
import ThemeSlider from './components/themeSlider/ThemeSlider'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [theme, setTheme] = useLocalStorage('theme')

  const handleOnSearchChange = (searchData) => {
        const [lat, lon] =searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&cnt=7`);

        Promise.all([currentWeatherFetch, forecastFetch])
          .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({ city: searchData.label, ...weatherResponse });
            setForecast({ city: searchData.label, ...forecastResponse });
          })
          .catch((err) => console.log(err));
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    
    <div className='container' data-theme={theme} >  
    <div className='top-page'>   
      <SearchBar 
        onSearchChange={handleOnSearchChange}      
      />            
       <ThemeSlider onToggle={switchTheme}/>      
    </div>      
      { currentWeather && <CurrentWeather data={currentWeather} />}
      { forecast && <Forecast data={forecast} />}
    </div>
 
  );
}

export default App;
