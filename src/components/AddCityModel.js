import React, { Component } from 'react';

export default class AddCityModel extends Component{
  render(){
    return(<div>
      <form className="popupForm">
      <h1>Расширение списка городов</h1>
        <ul className="addSity-info">
          <li><p className="name-city">Введите название города, который хотите добавить:</p><input className="enter-sity" type="text"/></li>
          <li><p className="name-city">Введите название этого города на английском:</p><input className="enter-sity" type="text"/></li>
          <li><p className="name-city">Введите код страны в котором он находится:</p><input className="enter-sity" type="text"/></li>
        </ul>
        <button className="btn-add submit">Добавить</button>
        <button className="button-close" type="button">Закрыть</button>
      </form>
      </div>);
  }
  }
