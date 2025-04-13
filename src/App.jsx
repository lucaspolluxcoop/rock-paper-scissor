import './App.css';
import Choices from './components/Choices';
import GameActions from './components/GameActions';
import GameStats from './components/GameStats';
import Result from './components/Result';
import useGameActions from './hooks/useGameActions';

function App() {
  const { currentOption, opponentOption, winner, counter, play, reset, handleOptionSelect } =
    useGameActions();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <GameStats counter={counter} />
      <h1 className="mb-4 text-4xl font-bold">Rock Paper or Scissors</h1>
      <Choices
        currentOption={currentOption}
        opponentOption={opponentOption}
        handleOptionSelect={handleOptionSelect}
      />
      <GameActions play={play} reset={reset} />
      <Result winner={winner} currentOption={currentOption} />
    </div>
  );
}

export default App;
