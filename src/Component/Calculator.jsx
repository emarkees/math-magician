import React from 'react';
import Screen from './Screen';
import '../index.css';

const Calculator = () => (

  <div className="wrapper container">
    <Screen />
    <div className="buttonBox">
      <div className="bttn">
        <button className="button color-bg" type="button">AC</button>
        <button className="button color-bg" type="button">+/-</button>
        <button className="button  color-bg" type="button">%</button>
        <button className="button orange" type="button">/</button>
      </div>
      <div className="bttn">
        <button className="button  color-bg" type="button">7</button>
        <button className="button  color-bg" type="button">8</button>
        <button className="button  color-bg" type="button">9</button>
        <button className="button orange" type="button">x</button>
      </div>
      <div className="bttn">
        <button className="button color-bg" type="button">4</button>
        <button className="button  color-bg" type="button">5</button>
        <button className="button  color-bg" type="button">6</button>
        <button className="button orange" type="button">-</button>
      </div>
      <div className="bttn">
        <button className="button  color-bg" type="button">1</button>
        <button className="button  color-bg" type="button">2</button>
        <button className="button  color-bg" type="button">3</button>
        <button className="button orange" type="button">+</button>
      </div>
      <div className="bttn">
        <button className="button zero  color-bg" type="button">0</button>
        <button className="button  color-bg" type="button">.</button>
        <button className="button  color-bg" type="button">=</button>
      </div>
    </div>
  </div>
);

export default Calculator;
