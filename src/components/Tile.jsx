import React from "react";

export default function Tile({ number, currentIndex, onClick }) {
  const currentX = currentIndex % 4;
  const currentY = Math.floor(currentIndex / 4);

  return (
    <div
      className={`absolute flex items-center justify-center w-1/4 h-1/4 transition-transform duration-300 ease-in-out p-4 border border-black/10 cursor-pointer text-slate-800 ${
        number === 16
          ? "bg-transparent"
          : number === currentIndex + 1
          ? "bg-slate-400"
          : "bg-slate-200"
      }`}
      onClick={onClick}
      style={{
        transform: `translate(${currentX * 100}%, ${currentY * 100}%)`,
        zIndex: number === 16 ? 0 : 1,
      }}
    >
      {number === 16 ? "" : number}
    </div>
  );
}