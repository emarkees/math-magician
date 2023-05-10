import React from 'react';
import '../index.css';

/* const data = [
  ['A/C', '+/-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]; */

const Wrapper = () => (
  <div className="wrapper container">
    <Screen />
    <div className="buttonBox">
      <div className="bttn">
        <button className="button color-bg" type="button">A/C</button>
        <button className="button color-bg" type="button">+/-</button>
        <button className="button  color-bg" type="button">%</button>
        <button className="button orange" type="button">/</button>
      </div>
      <div className="bttn">
        <button className="button  color-bg" type="button">7</button>
        <button className="button  color-bg" type="button">8</button>
        <button className="button  color-bg" type="button">9</button>
        <button className="button orange" type="button">0</button>
      </div>
      <div className="bttn">
        <button className="button color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">0</button>
        <button className="button orange" type="button">0</button>
      </div>
      <div className="bttn">
        <button className="button  color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">0</button>
        <button className="button orange" type="button">0</button>
      </div>
      <div className="bttn">
        <button className="button zero  color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">.</button>
        <button className="button  color-bg" type="button">+</button>
      </div>

    </div>
  </div>
);

const Screen = () => (
  <div className="screen screen-container">{ 0 }</div>
);

export default Wrapper;
