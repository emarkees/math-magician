import React from 'react';
import '../index.css';

const Calculator = () => (
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
);

export default Calculator;