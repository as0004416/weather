import React, { Component } from 'react';
import DayOfTheForecastList from './DayOfTheForecastList';

const API_FIVE = "b6907d289e10d714a6e88b30761fae22";

export default class FiveDaysForecast extends Component{
  state={
    daysList: []
  }

  gettingWeather = () => {
    fetch(`https://openweathermap.org/data/2.5/forecast?q=Brest&mode=xml&appid=${API_FIVE}`)
    .then(data => data.json())
    .then(data => {
    const res = data.list.filter(el=>(new Date(el.dt_txt).getHours())===15);
    console.log(res);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
    };
    const gettingData = res.map(el=>
      <DayOfTheForecastList
        date = {(new Date(el.dt_txt)).toLocaleString('ru', options)}
        icon = {el.weather[0].icon}
        temp = {el.main.temp}
        speed = {el.wind.speed}
        pressure = {el.main.pressure}
      />
    )
      this.setState({
        daysList: gettingData
      });
      })
  }

  componentDidMount(){
    this.gettingWeather();
  }
  render(){
    return this.state.daysList;
  }
}
