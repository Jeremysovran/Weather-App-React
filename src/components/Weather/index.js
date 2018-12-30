import React from 'react';
import PropTypes from 'prop-types';

import './weather.scss';

const Weather = ({
  city, country, temperature, humidity, description, error,
}) => (
  <div className="weather__info">
    {city && country && <p className="weather__key">location:<span className="weather__value"> {city}, {country}</span></p>}
    {temperature && <p className="weather__key">temperature:<span className="weather__value"> {temperature}</span></p>}
    {humidity && <p className="weather__key">humidity:<span className="weather__value"> {humidity}</span></p>}
    {description && <p className="weather__key">description:<span className="weather__value"> {description}</span></p>}
    {error && <p className="weather__key"><span className="weather__value"> {error}</span></p>}
  </div>
);

Weather.propTypes = {
  city: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  country: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  humidity: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default Weather;
