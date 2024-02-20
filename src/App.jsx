import { useState } from 'react';
import Players from './components/Players';
import GameBoard from './components/GameBoard';

function App() {
  const [activePlarer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  };
  return (
    <main className='flex flex-col p-2 max-w-sm m-auto '>
      <div className=' flex flex-col bg-slate-600 p-4 rounded-md  text-yellow-100'>
        <ol className='flex flex-col gap-2'>
          <Players
            inititialName='Player 1'
            symbol='X'
            isActive={activePlarer === 'X'}
          />
          <Players
            inititialName='Player 2'
            symbol='O'
            isActive={activePlarer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlaerSymbol={activePlarer}
        />
      </div>
      log
    </main>
  );
}

export default App;
