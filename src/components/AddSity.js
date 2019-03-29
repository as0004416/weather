import React from 'react';

class AddSity extends React.Component{
  render(){
    return(
      <div class="addSity">
          <form class="addsity-form">
          <h3>Города для просмотра</h3>
          <hr/>
          <p class="city-list">Брест</p>
          <p class="city-list">Гродно</p>
          <hr/>
          <button onClick={this.props.weatherMethod} class="btn button-open"><div class="cross"></div></button>
          </form>
      </div>
    );
  }
}
export default AddSity;
