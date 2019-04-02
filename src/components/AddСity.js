import React, { Component } from 'react';
export default class AddCity extends Component{

  state = {
    text: ''
  }

  handleChange = event => {
    console.log(event.currentTarget.value);
    this.setState({text: event.currentTarget.value});
  }

  render(){

    return(
      <div className="addSity">
          <form className="addsity-form">
          <h3>Города для просмотра</h3>
          <hr/>
          <p className="city-list"></p>
          <input type="text" value={this.state.text} onChange = {this.handleChange}/>
          <hr/>
          <button onClick={this.props.weatherMethod} className="btn button-open"><div className="cross"></div></button>
          </form>
      </div>
    );
  }
}
