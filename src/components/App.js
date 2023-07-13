import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Game from "./Game";

const App = () => {
//   const [renderBall, setRenderBall] = useState(false);
//   const [ballPosition, setBallPosition] = useState({ left: "0px" });

//   const buttonClickHandler = () => {
//     setRenderBall(true);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "ArrowRight" && renderBall) {
//       setBallPosition((prevPosition) => ({
//         ...prevPosition,
//         left: parseInt(prevPosition.left) + 5 + "px",
//       }));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [renderBall]);

//   const renderBallOrButton = () => {
//     if (renderBall) {
//       return <div className="ball" style={ballPosition}></div>;
//     } else {
//       return <button onClick={buttonClickHandler}>Start</button>;
//     }
//   };

//   return <div className="playground">{renderBallOrButton()}</div>;
return(
    <Game/>
)
};

export default App;
