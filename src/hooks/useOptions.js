import { useEffect, useState } from 'react';
import { checkWinner, getOpponentOption } from '../utils/gameLogic.jsx';

export default function useOptions() {
  const [currentOption, setCurrentOption] = useState(null);
  const [opponentOption, setOpponentOption] = useState(null);
  const [winner, setWinner] = useState(null);
  const [counter, setCounter] = useState({
    you: 0,
    opponent: 0,
    total: 0,
  });

  useEffect(() => {
    if (!opponentOption) return;
    const getWinner = async () => {
      const result = await checkWinner(currentOption, opponentOption);
      if (!result) {
        setWinner('draw');
        setCounter((prev) => ({
          ...prev,
          total: prev.total + 1,
        }));
      } else {
        setWinner(result);
        const currentWinner = result === currentOption ? 'you' : 'opponent';
        setCounter((prev) => ({
          ...prev,
          [currentWinner]: prev[currentWinner] + 1,
          total: prev.total + 1,
        }));
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

  return {
    currentOption,
    opponentOption,
    winner,
    play,
    reset,
    handleOptionSelect,
    counter,
  };
}
