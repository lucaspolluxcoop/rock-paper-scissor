import { DocumentIcon, HandRaisedIcon, ScissorsIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentOption, setCurrentOption] = useState(null);
  const [oponentOption, setOponentOption] = useState(null);
  const options = ['rock', 'paper', 'scissors'];

  const getIcon = (option) => {
    switch (option) {
      case 'rock':
        return <HandRaisedIcon className="h-8 w-8" />;
      case 'paper':
        return <DocumentIcon className="h-8 w-8" />;
      case 'scissors':
        return <ScissorsIcon className="h-8 w-8" />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    const newOption = options[Math.floor(Math.random() * options.length)];
    setOponentOption(newOption);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Rock Paper or Scissors</h1>
      <div className="mt-5 flex flex-col justify-center gap-4">
        <span className="text-center text-xl font-bold">Make your choice</span>
        <div className="flex gap-4">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => setCurrentOption(option)}
              className="button cursor-pointer p-4 text-xl font-bold"
              title={option}
            >
              {getIcon(option)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-4">
        <button onClick={handleClick} className="button cursor-pointer text-xl font-bold">
          Play
        </button>
      </div>
      <div className="mt-5 flex gap-4">
        {oponentOption && (
          <div className="flex items-center gap-2">
            <span>Oponent chose:</span>
            {getIcon(oponentOption)}
          </div>
        )}
        {currentOption && (
          <div className="flex items-center gap-2">
            <span>You chose:</span>
            {getIcon(currentOption)}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
