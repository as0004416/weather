import React from 'react';
class InfoWeather extends React.Component{

  render(){
    return(
      <div class = "InfoWeather">
          <h1>Погода и прогноз</h1>
          <div class = "weather--city">
              <h2>Погода в г.{this.props.city}</h2>
              <img src="#" alt="Погода"/>
          </div>
          <div class="degrees">
              <h2>{this.props.temp}C</h2>
              <p>27февраля,2019</p>
          </div>
          <ul class="main-character">
              <hr/>
              <li class="character-list">
                  <p class="name">Ветер</p>
                  <ul class="character">
                      <li>Скорость - 4м/с</li>
                      <li>Порыв - 5м/с</li>
                      <li>Напрвление - Вест</li>
                  </ul>
              </li>
              <hr/>
              <li class="character-list">
                   <p class="name">Облачность</p>
                   <p class="character">Пасмурно</p>
              </li>
              <hr/>
              <li class="character-list">
                   <p class="name">Давление</p>
                   <p class="character">1020 гПА</p>
              </li>
              <hr/>
              <li class="character-list">
                   <p class="name">Влажность</p>
                   <p class="character">80%</p>
              </li>
              <hr/>
              <li class="character-list">
                   <p class="name">Восход Солнца</p>
                   <p class="character">08:15</p>
              </li>
              <hr/>
              <li class="character-list">
                   <p class="name">Закат Солнца</p>
                   <p class="character">19:01</p>
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
export default InfoWeather;
