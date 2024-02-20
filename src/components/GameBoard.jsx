import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlaerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectBoardSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlaerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  };

  return (
    <ol className='flex gap-4 justify-center p-4 '>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className='flex gap-4 flex-col'>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectBoardSquare(rowIndex, colIndex)}
                  className='rounded-md w-20 h-20 p-2 border-2 border-red-300'
                >
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
