import React, { Component } from 'react';
export default class CurrentWeather extends Component{

  constructor(props) {
    super();
  }

  render () {
    return (
      <div className = "InfoWeather">
          <h1>Погода и прогноз</h1>
          <div className = "weather--city">
              <h2>Погода в г.{this.props.city}</h2>
              <img src={`https://openweathermap.org/img/w/${this.props.icon}.png`} alt="Погода"/>
          </div>
          <div className="degrees">
              <h2>{this.props.temp}C°</h2>
              <p>{this.props.date}</p>
          </div>
          <ul className="main-character">
              <hr/>
              <li className="character-list">
                  <p className="name">Ветер</p>
                  <ul className="character">
                      <li>Скорость - {this.props.speed}м/с</li>
                      <li>Порыв - {this.props.gust}м/с</li>
                      <li>Напрвление - {this.props.deg}</li>
                  </ul>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Облачность</p>
                   <p className="character">{this.props.description}</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Давление</p>
                   <p className="character">{this.props.pressure} гПА</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Влажность</p>
                   <p className="character">{this.props.humidity}%</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Восход Солнца</p>
                   <p className="character">{this.props.sunrise}</p>
              </li>
              <hr/>
              <li className="character-list">
                   <p className="name">Закат Солнца</p>
                   <p className="character">{this.props.sunset}</p>
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
