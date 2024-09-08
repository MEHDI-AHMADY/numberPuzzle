import React, { useEffect, useState } from "react";
import Puzzle from "./components/Puzzle";
import Header from "./components/Header";

export default function App() {
  const shuffle = () =>
    new Array(16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5);

  const [numbers, setNumbers] = useState(shuffle());
  const [movesCount, setMovesCount] = useState(0);
  const [initialNumbers, setInitialNumbers] = useState([]);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    setInitialNumbers(numbers);
  }, []);

  const moveHandler = (clickedIndex) => {
    if (isResetting) return;

    const emptyIndex = numbers.indexOf(16);

    if (
      ![
        emptyIndex - 1,
        emptyIndex + 1,
        emptyIndex - 4,
        emptyIndex + 4,
      ].includes(clickedIndex)
    )
      return;

    const newNumbers = [...numbers];
    [newNumbers[emptyIndex], newNumbers[clickedIndex]] = [
      newNumbers[clickedIndex],
      newNumbers[emptyIndex],
    ];

    setNumbers(newNumbers);
    setMovesCount((prev) => prev + 1);
  };

  const newGameHandler = () => {
    const newNumbers = shuffle();
    setNumbers(newNumbers);
    setMovesCount(0);
    setInitialNumbers(newNumbers);
  };

  const resetHandler = async () => {
    setIsResetting(true);
    const steps = calculateSteps(numbers, initialNumbers);
    
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setNumbers(step);
    }

    setMovesCount(0);
    setIsResetting(false);
  };

  const calculateSteps = (current, target) => {
    const steps = [];
    const currentState = [...current];

    for (let i = 0; i < 16; i++) {
      if (currentState[i] !== target[i]) {
        const targetIndex = currentState.indexOf(target[i]);
        [currentState[i], currentState[targetIndex]] = [currentState[targetIndex], currentState[i]];
        steps.push([...currentState]);
      }
    }

    return steps;
  };

  return (
    <div>
      <Header
        movesCount={movesCount}
        newGameHandler={newGameHandler}
        reset={resetHandler}
      />
      <div className="flex items-center justify-center mt-32">
        <Puzzle numbers={numbers} moveHandler={moveHandler} />
      </div>
    </div>
  );
}