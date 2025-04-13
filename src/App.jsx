import {
  DocumentIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  ScissorsIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentOption, setCurrentOption] = useState(null);
  const [opponentOption, setOpponentOption] = useState(null);
  const [winner, setWinner] = useState(null);
  const options = ['rock', 'paper', 'scissors'];
  const rules = [
    { option: 'rock', beats: 'scissors' },
    { option: 'paper', beats: 'rock' },
    { option: 'scissors', beats: 'paper' },
  ];

  const getIcon = (option) => {
    switch (option) {
      case 'rock':
        return <HandRaisedIcon className="h-8 w-8" />;
      case 'paper':
        return <DocumentIcon className="h-8 w-8" />;
      case 'scissors':
        return <ScissorsIcon className="h-8 w-8" />;
      default:
        return <QuestionMarkCircleIcon className="h-8 w-8" />;
    }
  };

  useEffect(() => {
    if (!opponentOption) return;
    const getWinner = async () => {
      const result = await checkWinner();
      if (!result) setWinner('draw');
      else {
        setWinner(result);
      }
    };
    getWinner();
  }, [opponentOption]);

  const play = async () => {
    if (opponentOption || winner || !currentOption) return;
    const oppOption = options[Math.floor(Math.random() * options.length)];
    setOpponentOption(oppOption);
  };

  const reset = () => {
    setCurrentOption(null);
    setOpponentOption(null);
    setWinner(null);
  };

  const checkWinner = async () => {
    let rule = rules.find((rule) => rule.option === currentOption);
    if (rule && rule.beats === opponentOption) {
      return currentOption;
    }
    rule = rules.find((rule) => rule.option === opponentOption);
    if (rule && rule.beats === currentOption) {
      return opponentOption;
    }
    return null;
  };

  const handleOptionSelect = (option) => {
    if (opponentOption) return;
    setCurrentOption(option);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Rock Paper or Scissors</h1>
      <div className="mt-5 flex flex-row items-center justify-center gap-3">
        <span className="text-center text-xl font-bold">Make your choice: </span>
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
      <div className="mt-5 flex flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span>Opponent chose:</span>
          {opponentOption ? getIcon(opponentOption) : getIcon()}
        </div>
      </div>
      <div className="mt-5 flex flex-row items-center justify-center gap-5">
        <button
          onClick={play}
          className="button cursor-pointer border px-3 py-1 text-xl font-bold hover:bg-gray-700"
        >
          Play
        </button>
        <button
          onClick={reset}
          className="button cursor-pointer border px-3 py-1 text-xl font-bold hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
      <div className="mt-5 flex gap-4">
        {winner !== null && (
          <div className="flex items-center gap-2">
            {winner === 'draw' ? 'Draw' : 'Winner: '}
            {winner !== 'draw' && getIcon(winner)}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
