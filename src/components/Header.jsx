import React from 'react';
import { MdAutorenew } from "react-icons/md";

export default function Header({newGameHandler , movesCount , reset}) {
  return (
    <div className='w-full mx-auto px-4 py-2 flex items-center flex-wrap gap-3 shadow-lg'>
      <button onClick={newGameHandler} className='outline-none px-4 py-2 rounded-md bg-slate-200 flex items-center gap-1'>
      <MdAutorenew /> New Game 
      </button>

      <button className='outline-none px-4 py-2 rounded-md bg-slate-200' onClick={reset}>reset</button>

      <div className='py-2 px-4 rounded-md bg-slate-200'>moves so far : {movesCount}</div>
    </div>
  )
}
