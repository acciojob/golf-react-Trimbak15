import React, { useState, useEffect } from "react";

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && startGame) {
        setBallPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + 5,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startGame]);

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div>
      {!startGame ? (
        <button className="start" onClick={handleStartGame}>
          Start
        </button>
      ) : (
        <div
          className="ball"
          style={{
            position: "absolute",
            top: `${ballPosition.y}px`,
            left: `${ballPosition.x}px`,
          }}
        />
      )}
    </div>
  );
};

export default Game;
