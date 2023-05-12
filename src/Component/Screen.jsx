import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <div className="screen screen-container">
    { value.total }
    { value.operation }
    { value.next }
  </div>
);

export default Screen;
