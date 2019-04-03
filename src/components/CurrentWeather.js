import React, { Component } from 'react';
const API_KEY = "b6907d289e10d714a6e88b30761fae22";
export default class CurrentWeather extends Component{

  constructor(){
    super();
    if(!localStorage.getItem('cities'))
     localStorage.setItem('cities', JSON.stringify(['Brest']));
    if(!localStorage.getItem('currentCity')){
      localStorage.setItem('currentCity', 'Brest');
    }
  }
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
    const city = localStorage.getItem('currentCity');
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

  render () {
    return (

      <div className = "InfoWeather">
          <h1>Погода и прогноз</h1>
          <div className = "weather--city">
              <h2>Погода в г.{this.state.city}</h2>
              <img src={`https://openweathermap.org/img/w/${this.state.icon}.png`} alt="Погода"/>
          </div>
          <div className="degrees">
              <h2>{this.state.temp}C°</h2>
              <p>{this.state.date}</p>
          </div>
          <ul className="main-character">
              <hr/>
              <li className="character-list">
                  <p className="name">Ветер</p>
                  <ul className="character">
                      <li>Скорость - {this.state.speed}м/с</li>
                      <li>Порыв - {this.state.gust}м/с</li>
                      <li>Напрвление - {this.state.deg}</li>
                  </ul>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Облачность</p>
                   <p className="character">{this.state.description}</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Давление</p>
                   <p className="character">{this.state.pressure} гПА</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Влажность</p>
                   <p className="character">{this.state.humidity}%</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Восход Солнца</p>
                   <p className="character">{this.state.sunrise}</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Закат Солнца</p>
                   <p className="character">{this.state.sunset}</p>
              </li>
              <hr/>
          </ul>
          <h2>4 дня назад на сегодня обещали: Еще нет в истории погоды С</h2>
          <p>Ветер: Еще нет в истории погоды</p>
          <p>Давление: Еще нет в истории погоды</p>
          <p>Облачность/осадки: Еще нет в истории погоды</p>
          <hr/>
      </div>
    );
  }
}
