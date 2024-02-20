import { useState } from 'react';

const Players = ({ inititialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(inititialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className='p-2 w-40'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        className='w-40 p-2 rounded-md border-slate-500 bg-slate-500 '
        type='text'
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className='flex justify-between items-center '>
      {editablePlayerName}
      <span className='p-1'>{symbol}</span>
      <button
        onClick={handleEdit}
        className='text-sm w-8 hover:text-yellow-500'
      >
        {isEditing ? 'save' : 'edit'}
      </button>
    </li>
  );
};

export default Players;
