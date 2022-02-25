import React from "react";
import './currentWeather.scss';

class CurrentWeather extends React.Component{
  render(){
    const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
    return(
      <div className="current-weather">
        <div className="current-weather__content">
          <div className="current-weather__text">
            <p className="current-weather__temp">{this.props.currentTemperature} °</p>
            <p className="current-weather__description">{this.props.description}</p>
          </div>
          <img 
            className="current-weather_icon" src= {url} alt={this.props.description}
          />
        </div>
        <div>
        <p className="current-weather__feels-like">Feels like {this.props.feelsLike} °</p>
        </div>

      </div>
    )
  }
}

export default CurrentWeather;