import { DocumentIcon, HandRaisedIcon, ScissorsIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentOption, setCurrentOption] = useState(null);
  const [opponentOption, setOpponentOption] = useState(null);
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

  useEffect(() => {
    // TODO: setWinner
  }, [opponentOption]);

  const play = async () => {
    if (opponentOption) return;
    if (!currentOption) return;
    const oppOption = options[Math.floor(Math.random() * options.length)];
    setOpponentOption(oppOption);
  };

  const setWinner = async (option) => {
    /* TODO: setWinner */
  };

  const handleOptionSelect = (option) => {
    if (opponentOption) return;
    setCurrentOption(option);
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
              onClick={() => handleOptionSelect(option)}
              className={`button cursor-pointer p-4 text-xl font-bold ${
                currentOption === option ? 'text-blue-400' : ''
              }`}
              title={option}
            >
              {getIcon(option)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-4">
        <button onClick={play} className="button cursor-pointer text-xl font-bold">
          Play
        </button>
      </div>
      {/* replace with winner section */}
      <div className="mt-5 flex gap-4">
        {opponentOption && (
          <div className="flex items-center gap-2">
            <span>Opponent chose:</span>
            {getIcon(opponentOption)}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
