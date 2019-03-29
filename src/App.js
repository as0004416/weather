import React from 'react';
import InfoWeather from './components/InfoWeather';
import SomeDays from './components/SomeDays';
import AddSity from './components/AddSity';
import PopupForm from './components/PopupForm';
import './App.css';

const API_KEY = "b6907d289e10d714a6e88b30761fae22";
class App extends React.Component{

  state={
    sity: null,
    icon: null,
    temp: null,
    speed: null,
    deg: null,
    clouds: null,
    pressure: null,
    humidity: null,
    sunrise: null,
    sunset: null
  }

  gettingWeather = async(e) => {
    e.preventDefault();
    const api_url = await fetch(`https://openweathermap.org/data/2.5/weather?q=Brest&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      sity: data.main.name,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      speed: data.wind.speed,
      deg: data.wind.deg,
      clouds: data.clouds.all,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      error: ""
    });
  }
  render(){
    return(
      <div class="app">
          <InfoWeather
          sity = {this.state.sity}
          icon = {this.state.icon}
          temp = {this.state.temp}
          speed = {this.state.speed}
          deg = {this.state.deg}
          clouds = {this.state.clouds}
          pressure = {this.state.pressure}
          humidity = {this.state.humidity}
          sunrise = {this.state.sunrise}
          sunset = {this.state.sunset}
          />
          <SomeDays />
          <AddSity weatherMethod={this.gettingWeather}/>
          <PopupForm />
      </div>
    );
  }
}
export default App;
