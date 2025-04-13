import { useEffect, useState } from 'react';
import { checkWinner, getOpponentOption } from '../utils/gameLogic.jsx';

export default function useOptions() {
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

  return {
    currentOption,
    opponentOption,
    winner,
    play,
    reset,
    handleOptionSelect,
  };
}
