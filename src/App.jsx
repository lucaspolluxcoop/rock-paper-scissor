import { useEffect, useState } from 'react';
import './App.css';
import MyChoice from './components/MyChoice';
import { checkWinner, getIcon, getOpponentOption } from './utils/gameLogic.jsx';

function App() {
  const [currentOption, setCurrentOption] = useState(null);
  const [opponentOption, setOpponentOption] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!opponentOption) return;
    const getWinner = async () => {
      const result = await checkWinner(currentOption, opponentOption);
      if (!result) setWinner('draw');
      else {
        setWinner(result);
      }
    };
    getWinner();
  }, [opponentOption]);

  const play = async () => {
    const option = getOpponentOption(opponentOption, winner, currentOption);
    setOpponentOption(option);
  };

  const reset = () => {
    setCurrentOption(null);
    setOpponentOption(null);
    setWinner(null);
  };

  const handleOptionSelect = (option) => {
    if (opponentOption) return;
    setCurrentOption(option);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Rock Paper or Scissors</h1>
      <MyChoice currentOption={currentOption} handleOptionSelect={handleOptionSelect} />
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
