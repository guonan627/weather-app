import React from "react";
import {getCurrentWeather} from '../apis/open-weather-api.js';

// this is a class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onInputChange(e){
    this.props.inputChange(e);
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.formSubmitted();

  }

  // render function is triggered whenever updating the state using the setState function
  render() {
    const location = this.props.location;
    const temp = 'this.state.temp';

    return (
      <div>
        <form onSubmit ={(e) => this.onFormSubmit(e)} >
          {/* {location} */}
          <button type="submit">Search</button>
          <input 
            id="search" 
            name="search" 
            value={location}  
            onChange={ (e) => this.onInputChange(e)}
          >
          </input>
        </form>
      </div>
    )
  }
};

export default SearchBar;
