import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setX(0);
    setY(0);
    setBallPosition({ left: 0 + "px", top: 0 + "px" });
    setRenderBall(false);
  };
  const handleKeyDown = (event) => {
    var x1 = x;
    var y1 = y;
    if (event.key === "ArrowRight") {
      x1 += 5;
      setX(x1);
    } else if (event.key === "ArrowLeft") {
      x1 -= 5;
      setX(x1);
    } else if (event.key === "ArrowUp") {
      y1 -= 5;
      setY(y1);
    } else if (event.key === "ArrowDown") {
      y1 += 5;
      setY(y1);
    }
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    setBallPosition({ left: x + "px", top: y + "px" });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [x, y]);
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={buttonClickHandler} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
