import React, { Component } from 'react';
import AddCityModel from './AddCityModel';
export default class AddCity extends Component{

  state={
    cityList: [],
    isOpen: true
  }
  getCity=()=>{
    let citiesList = localStorage.getItem('cities');
    citiesList = JSON.parse(citiesList);
    console.log(citiesList);

  const gettingCityList = citiesList.map(el=><li>{el}</li>);
  console.log(gettingCityList);

    this.setState({
    cityList: gettingCityList
    });

}
  componentDidMount(){
    this.getCity();
  }
  render(){
    const {AddCityModel} = this.props;
    const body = this.state.isOpen && <AddCityModel/>;
    return(
        <div className="addsity-form">
          <h3>Города для просмотра</h3>
          <hr/>
          <ul>{this.state.cityList}</ul>
          <hr/>
          <button onClick={this.props.showModel} className="btn button-open"><div className="cross"></div></button>
        </div>
    );
  }

}
