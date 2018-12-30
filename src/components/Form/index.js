import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button type="submit">Get Weather</button>
  </form>
);


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default Form;
