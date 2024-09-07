import React, { useState } from "react";
import Tile from "./Tile";

export default function Puzzle() {
  const shuffle = () =>
    new Array(16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5);

  const [numbers, setNumbers] = useState(shuffle());

  const moveHandler = (clickedIndex) => {
    const emptyIndex = numbers.indexOf(16);
 
    if(![emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4].includes(clickedIndex)) return;

    const newNumbers = [...numbers];
    [newNumbers[emptyIndex], newNumbers[clickedIndex]] = [newNumbers[clickedIndex], newNumbers[emptyIndex]];

    setNumbers(newNumbers);
  };

  return (
    <div className="grid grid-cols-4 max-h-80 max-w-80 rounded-md overflow-hidden">
      {numbers.map((number, index) => (
        <Tile key={index} number={number} index={index} onClick={() => moveHandler(index)} />
      ))}
    </div>
  );
}