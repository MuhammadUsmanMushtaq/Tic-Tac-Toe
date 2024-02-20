import React from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  return (
    <ol className='flex gap-4 justify-center p-4 '>
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className='flex gap-4 flex-col'>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button className='rounded-md w-20 h-20 p-2 border-2 border-red-300'>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
