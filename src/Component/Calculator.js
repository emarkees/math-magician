import React, { useState } from 'react';
import Screen from './Screen';
import calculate from '../Logic/Calculate';
import '../index.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const newState = calculate(state, e.target.value);
    setState({ ...newState, value: newState.next || newState.total || '0' });
  };

  return (

    <div className="body-container">
      <div>
        <h2 className="header-text">Let&apos;s do some math!</h2>
      </div>
      <div className="wrapper container">
        <div className="screen-con">
          <Screen value={state} />
        </div>
        <div className="buttonBox">
          <div className="bttn">
            <button
              className="button clear color-bg"
              type="button"
              value="AC"
              onClick={handleClick}
            >
              AC
            </button>
            <button
              className="button color-bg"
              type="button"
              name="+/-"
              onClick={handleClick}
            >
              +/-
            </button>
            <button
              className="button color-bg"
              type="button"
              value="%"
              onClick={handleClick}
            >
              %
            </button>
            <button
              className="button color-bg"
              type="button"
              value="/"
              onClick={handleClick}
            >
              /
            </button>
          </div>
          <div className="bttn">
            <button
              className="button color-bg"
              type="button"
              value="7"
              onClick={handleClick}
            >
              7
            </button>
            <button
              className="button color-bg"
              type="button"
              value="8"
              onClick={handleClick}
            >
              8
            </button>
            <button
              className="button color-bg"
              type="button"
              value="9"
              onClick={handleClick}
            >
              9
            </button>
            <button
              className="button orange"
              type="button"
              value="x"
              onClick={handleClick}
            >
              x
            </button>
          </div>
          <div className="bttn">
            <button
              className="button color-bg"
              type="button"
              value="4"
              onClick={handleClick}
            >
              4
            </button>
            <button
              className="button color-bg"
              type="button"
              value="5"
              onClick={handleClick}
            >
              5
            </button>
            <button
              className="button color-bg"
              type="button"
              value="6"
              onClick={handleClick}
            >
              6
            </button>
            <button
              className="button orange"
              type="button"
              value="-"
              onClick={handleClick}
            >
              -
            </button>
          </div>
          <div className="bttn">
            <button
              className="button color-bg"
              type="button"
              value="1"
              onClick={handleClick}
            >
              1
            </button>
            <button
              className="button color-bg"
              type="button"
              value="2"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="button color-bg"
              type="button"
              value="3"
              onClick={handleClick}
            >
              3
            </button>
            <button
              className="button orange"
              type="button"
              value="+"
              onClick={handleClick}
            >
              +
            </button>
          </div>
          <div className="bttn">
            <button
              className="button zero color-bg"
              type="button"
              value="0"
              onClick={handleClick}
            >
              0
            </button>
            <button
              className="button color-bg"
              type="button"
              value="."
              onClick={handleClick}
            >
              .
            </button>
            <button
              className="button color-bg"
              type="button"
              value="="
              onClick={handleClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
