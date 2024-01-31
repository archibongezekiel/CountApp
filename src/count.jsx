import React from "react";

import { useState } from "react";

export default function CountApp() {
  const [count, setCount] = useState(0);
  const [save, setSave] = useState();
  const addNumber = () => {
    setCount((count) => (count += 1));
  };
  const moveNumber = () => {
    count === -0 ? setCount(0) : setCount((count) => (count -= 1));
  };
  const saveChange = () => {
    setSave(() => `You have click the button ${count} times`);
  };
  const resetChange = () => {
    setCount(0);
  };
  const container = {
    maxWidth: "400px",
    border: "1px solid red",
    margin: "auto",
    marginTop: "100px",
    backgroundColor: "red",
    textAlign: "center",
    height: "400px",
    borderRadius: "20px",
  };
  const countContainer = {
    backgroundColor: "black",
    maxWidth: "80px",
    margin: "auto",
    borderRadius: "10px",
  };
  const countNumber = {
    fontSize: "30px",
    color: "white",
    padding: "10px",
  };
  const styleButton = {
    border: "none",
    outline: "none",
    backgroundColor: "black",
    color: "white",
    height: "30px",
    width: "100px",
    borderRadius: "10px",
    fontSize: "16px",
    margin: "10px",
  };

  return (
    <>
      <div style={container}>
        <div style={{ marginTop: "100px" }}>
          <div style={countContainer}>
            <p style={countNumber}>{count}</p>
          </div>
          <button onClick={addNumber} style={styleButton}>
            Increase
          </button>
          <button onClick={moveNumber} style={styleButton}>
            Decrease
          </button>
        </div>

        <div>
          <button onClick={saveChange} style={styleButton}>
            Save
          </button>{" "}
          <button onClick={resetChange} style={styleButton}>
            Reset
          </button>
          <p>{save}</p>
        </div>
      </div>
    </>
  );
}
