import React from 'react';

class PopupForm extends React.Component{
  render(){
    return(<div>
      <form class="popupForm">
      <h1>Расштрение списка городов</h1>
        <ul class="addSity-info">
          <li><p class="name-city">Введите название города, который хотите добавить:</p><input class="enter-sity" type="text"/></li>
          <li><p class="name-city">Введите название этого города на английском:</p><input class="enter-sity" type="text"/></li>
          <li><p class="name-city">Введите код страны в котором он находится:</p><input class="enter-sity" type="text"/></li>
        </ul>
        <button class="btn-add submit">Добавить</button>
        <button class="button-close" type="button">Закрыть</button>
      </form>
      </div>);
  }
  }
  export default PopupForm;
