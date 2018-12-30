/**
 * Npm import
 */
import React from 'react';
import Titles from 'src/components/Titles';
import Form from 'src/components/Form';
import Weather from 'src/components/Weather';
import axios from 'axios';
/**
 * Local import
 */
import './app.scss';

const API_KEY = '8a31491176789340daee6d3f567a99ab';
/**
 * Code
 */
class App extends React.Component {
  state = {
    temperature: false,
    city: false,
    country: false,
    humidity: false,
    description: false,
    error: false,
  }

  getWeather = (e) => {
    e.preventDefault();
    console.log('submit');
    const city = e.target.elements.city.value;
    console.log(city);
    const country = e.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    axios.get(url)
      .then((result) => {
        console.log(result);
        this.setState({
          temperature: result.data.main.temp,
          city: result.data.name,
          country: result.data.sys.country,
          humidity: result.data.main.humidity,
          description: result.data.weather[0].description,
          error: '',
        });
      })
      .catch((error) => {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'error try again!',
        });
      });
  }

  render() {
    const {
      temperature, city, country, humidity, description, error,
    } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Form handleSubmit={this.getWeather} />
                  <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
