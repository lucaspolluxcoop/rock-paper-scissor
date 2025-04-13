import './App.css';
import Choices from './components/Choices';
import GameActions from './components/GameActions.jsx';
import Result from './components/Result';
import useOptions from './hooks/useOptions';

function App() {
  const { currentOption, opponentOption, winner, play, reset, handleOptionSelect } = useOptions();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
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
