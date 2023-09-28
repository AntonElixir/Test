import React, { useState } from "react";
import PropTypes from "prop-types";

import {COUNTER_APP_TEST_IDS} from "./testids";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); // []

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (c) => c + 1 );
  };

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid={COUNTER_APP_TEST_IDS.title}> {counter} </h2>
      <button data-testid={COUNTER_APP_TEST_IDS.buttonPlus} onClick={handleAdd}>+1</button>
      <button data-testid={COUNTER_APP_TEST_IDS.buttonReset} onClick={handleReset}>Reset</button>
      <button data-testid={COUNTER_APP_TEST_IDS.buttonMinus} onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
