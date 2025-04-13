import './App.css';
import Choices from './components/Choices';
import GameActions from './components/GameActions.jsx';
import useOptions from './hooks/useOptions';
import { getIcon } from './utils/gameLogic.jsx';

function App() {
  const { currentOption, opponentOption, winner, play, reset, handleOptionSelect } = useOptions();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Rock Paper or Scissors</h1>
      <Choices
        currentOption={currentOption}
        opponentOption={opponentOption}
        handleOptionSelect={handleOptionSelect}
      />
      <GameActions play={play} reset={reset} />
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
