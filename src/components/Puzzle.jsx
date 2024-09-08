import React from "react";
import Tile from "./Tile";

export default function Puzzle({ numbers, moveHandler }) {
  return (
    <div className="relative w-80 h-80 rounded-md overflow-hidden shadow-md">
      {numbers.map((number, index) => (
        <Tile 
          key={number} 
          number={number} 
          currentIndex={numbers.indexOf(number)}
          onClick={() => moveHandler(index)} 
        />
      ))}
    </div>
  );
}