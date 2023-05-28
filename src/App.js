import React, { useState } from "react";
import Form from "./components/Form";
import { LearningEffect } from "./useEffect/LearningEffect";

const App = () => {
  const intialState = 10;
  const [count, setCount] = useState(intialState);
  const [isEdit, setIsEdit] = useState(false);

  const handleIncrease = () => {
    // setCount(count + 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // for (let i = 0; i < 10; i++) {
    // setCount((xyz) => xyz + 1);
    // count++
    // }
    setCount((prevState) => prevState + 1);
  };
  const handleDecrease = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCount(intialState);
  };
  console.log("rerender");
  return (
    <div>
      {/* <h1>Counter</h1>
      {count}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button> */}
      {/* <Form /> */}
      <LearningEffect />
    </div>
  );
};

export default App;
