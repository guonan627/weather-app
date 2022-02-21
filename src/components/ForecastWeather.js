import React from "react";

class Forecast extends React.Component{
  render(){
    const forecastItems = this.props.forecast.map((f) => {
      const url= `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
      let ampm ='AM';
      let hour = new Date(f.dt*1000).getHours();

      if (hour > 12 ){
        hour = hour-12;
        ampm ='PM';
      } 

      return (
        <div className= "forecast-item">
          <p className="forecast-item__hour">{hour}:00{ampm}{""}</p>
          <p className="forecast-item__temp">{f.temp}</p>
          <img src={url} alt={f.weather[0].description} />
          <p className="forecast-item__description">{f.weather[0].main}</p>
        </div>
      );
    });

    return(
      <div className="forecast">{forecastItems}</div>
    );
  }
}

export default Forecast;
