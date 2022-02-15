import './App.scss';
import React from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import { getCurrentWeather } from './apis/open-weather-api';

// this is a functional component
// returns a template
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temp: '',
      feelsLike: '',
      description: '',
      icon: ''
    };
  }
  
  onInputChange(e){
    this.setState({
      location: e.target.value
    })
  };
  
  onFormSubmit(){
    getCurrentWeather(this.state.location)
    .then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feelsLike: res.data.main.feels_like,
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon

      });
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            location={this.state.location} 
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={(e)=> this.onFormSubmit()}
          />
          <CurrentWeather 
            currentTemperature={this.state.temp}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
          />
        </header>
      </div>
    );
  }
}

export default App;
