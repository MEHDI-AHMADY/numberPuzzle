import React from "react";

export default function Tile({ number, index , onClick }) {
  return (
    <div
      className={`flex items-center justify-center transition-all duration-500 p-4 border border-black/10 cursor-pointer text-white ${
        number === 16 ? "bg-transparent" : number === index + 1 ? "bg-green-500" : "bg-green-300"
      }`}
      onClick={onClick}
    >{number === 16 ? "" : number}</div>
  );
}
