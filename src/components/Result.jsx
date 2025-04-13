import { useEffect } from 'react';

function Result({ winner, currentOption }) {
  useEffect(() => {
    if (winner === null) return;

    const isPlayerWinner = winner === currentOption;
    if (winner !== 'draw' && isPlayerWinner) {
      const confetti = document.createElement('script');
      confetti.src =
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      document.head.appendChild(confetti);

      confetti.onload = () => {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      };
    }
  }, [winner, currentOption]);

  if (!winner) return null;

  const isPlayerWinner = winner === currentOption;
  const getResultMessage = () => {
    if (winner === 'draw') return 'Draw!';
    return isPlayerWinner ? 'You Win!' : 'You Lose!';
  };

  const getResultClass = () => {
    if (winner === 'draw') return 'text-yellow-500';
    return isPlayerWinner ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <div className={`text-2xl font-bold ${getResultClass()}`}>{getResultMessage()}</div>
    </div>
  );
}

export default Result;
