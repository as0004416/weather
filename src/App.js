import React from 'react';
import AddCity from './components/AddСity';
import AddCityModel from './components/AddCityModel';
import CurrentWeather from './components/CurrentWeather';
import DayOfTheForecastList from './components/DayOfTheForecastList';
import FiveDaysForecast from './components/FiveDaysForecast';
import Shedule from './components/Shedule';
import './App.css';

class App extends React.Component {
  state = {
    isOpen: false
  }
  renderCityModule = () => {

  if(this.state.isOpen){
     return <AddCityModel/>};
}
 showModel=()=>{
   this.setState({
     isOpen: !this.state.isOpen
   })
 }
  render(){
    return(
      <div className="app">
          <CurrentWeather/>
          <div className="SheduleForecast">
          <Shedule />
          <FiveDaysForecast/>
          </div>
          <AddCity weatherMethod = {this.gettingWeather} showModel = {this.showModel}/>
          {this.renderCityModule()}

      </div>
    );
  }
}
export default App;
