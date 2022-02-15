import React from "react";

class CurrentWeather extends React.Component{
  render(){
    const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
    return(
      <div className="current-weather">
        <div className="current-weather__content">
          <p className="current-weather__temp">{this.props.currentTemperature}</p>
          <p className="current-weather__description">{this.props.description}</p>
          <img 
            className="current-weather_icon" src= {url} alt={this.props.description}
          />
        </div>
        <div>
        <p className="current-weather__feels-like">Feels Like {this.props.feelsLike}</p>
        </div>

      </div>
    )
  }
}

export default CurrentWeather;