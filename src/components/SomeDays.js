import React from 'react';

class SomeDays extends React.Component{
  render(){
    return(
      <div class="some-days">
          <div class="schedule"><h1>График</h1></div>
        <div class="main-weather--list">
            <h3>Прогноз погоды, г.Брест</h3>
          <hr/>
        <ul class="weather-list">
          <li class="weather-list--info"><div class="date">Четверг, 28 февраля 2019<img src="#" alt="weather"/></div><div class="charaсters"><p>8C,Ясно</p><p>Ветер: 10.15 м/c</p><p>Давление: 999,36гПа</p></div></li>
          <hr/>
          <li class="weather-list--info"><div class="date">Пятница, 1 марта 2019<img src="#" alt="weather"/></div><div class="charaсters"><p>1C,Ясно</p><p>Ветер: 10.15 м/c</p><p>Давление: 999,36гПа</p></div></li>
          <hr/>
          <li class="weather-list--info"><div class="date">Суббота, 2 марта 2019<img src="#" alt="weather"/></div><div class="charaсters"><p>0C,Ясно</p><p>Ветер: 10.15 м/c</p><p>Давление: 999,36гПа</p></div></li>
          <hr/>
          <li class="weather-list--info"><div class="date">Воскресенье, 28 февраля 2019<img src="#" alt="weather"/></div><div class="charaсters"><p>8C,Ясно</p><p>Ветер: 10.15 м/c</p><p>Давление: 999,36гПа</p></div></li>
          <hr/>
          <li class="weather-list--info"><div class="date">Понедельник, 28 февраля 2019<img src="#" alt="weather"/></div><div class="charaсters"><p>8C,Ясно</p><p>Ветер: 10.15 м/c</p><p>Давление: 999,36гПа</p></div></li>
          <hr/>
      </ul>
          </div>
      </div>
    );
  }
}
export default SomeDays;
