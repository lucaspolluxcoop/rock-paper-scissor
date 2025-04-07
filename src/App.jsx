import { useState } from 'react';
import './App.css';

function App() {
  const { currentOption, setCurrentOption } = useState(null);
  const options = ['rock', 'paper', 'scissors'];

  const handleClick = () => {
    setCurrentOption(options[Math.floor(Math.random() * options.length)]);
    console.log(currentOption);
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Piedra, papel o tijera</h1>
      <div className="mt-5 flex gap-4">
        <button onClick={handleClick} className="button text-xl font-bold">
          Elección máquina
        </button>
        {currentOption && <p className="text-xl font-bold">{currentOption}</p>}
      </div>
    </div>
  );
}

export default App;
