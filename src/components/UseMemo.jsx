import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [addvalue, setaddValue] = useState(1);
  const [subvalue, setsubValue] = useState(500);

  const add = () => {
    setaddValue((prev) => prev + 1);
  };

  const subtract = () => {
    setsubValue((prev) => prev - 1);
  };

  const multiply = () => {
    console.log("Multiplicaption function has run");
    return addvalue * 10;
  };

  const multiplication = useMemo(multiply, [addvalue]);

  return (
    <>
      <h1>Use Memo Hook</h1>
      <h2>
        Example 1 : <span>Add ,sub and Multiply functionality</span>
      </h2>
      {/* <h3> {multiply()}</h3> */}
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <h3>The value of addition is : {addvalue} </h3>
      <h3>The value of subtraction is : {subvalue} </h3>
      <h3>{multiplication}</h3>
    </>
  );
};

export default UseMemo;
