import React from 'react';
import AddCity from './components/AddСity';
import AddCityModel from './components/AddCityModel';
import CurrentWeather from './components/CurrentWeather';
import DayOfTheForecastList from './components/DayOfTheForecastList';
import FiveDaysForecast from './components/FiveDaysForecast';
import Shedule from './components/Shedule';
import './App.css';

const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends React.Component {

  state={
    date: null,
    city: null,
    icon: null,
    temp: null,
    gust: null,
    speed: null,
    deg: null,
    description: null,
    pressure: null,
    humidity: null,
    sunrise: null,
    sunset: null
  }

  gettingWeather = (e) => {
    const city = 'Brest';
    fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(data => data.json())
    .then(data => {

      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        timezone: 'UTC',
      };
      const time ={
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }

console.log(data);

      this.setState({
        date: (new Date(data.dt).toLocaleString('ru', options)),
        city: city,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        gust: data.wind.gust,
        speed: data.wind.speed,
        deg: data.wind.deg,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        sunrise: (new Date(data.sys.sunrise).toLocaleString('ru',time)),
        sunset: (new Date(data.sys.sunset).toLocaleString('ru', time)),
        error: ""
      });
    })
  }

  componentDidMount () {
    this.gettingWeather();
  }

  render(){
    return(
      <div className="app">
          <CurrentWeather
          date = {this.state.date}
          city = {this.state.city}
          icon = {this.state.icon}
          temp = {this.state.temp}
          gust = {this.state.gust}
          speed = {this.state.speed}
          deg = {this.state.deg}
          description = {this.state.description}
          pressure = {this.state.pressure}
          humidity = {this.state.humidity}
          sunrise = {this.state.sunrise}
          sunset = {this.state.sunset}
          />
          <div className="SheduleForecast">
          <Shedule />
          <FiveDaysForecast/>
          </div>
          <AddCity weatherMethod = {this.gettingWeather}/>
          <AddCityModel />

      </div>
    );
  }
}
export default App;
