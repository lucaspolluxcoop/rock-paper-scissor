function GameStats({ counter }) {
  return (
    <div className="mb-20 w-1/2 flex-col items-center justify-center border p-5">
      <h3 className="mb-4 w-full text-center text-2xl font-semibold">
        Result Stats from {counter.total} games
      </h3>
      <div className="mb-4 flex w-full text-xl">
        <div className="w-1/2 text-center">You</div>
        <div className="w-1/2 text-center">Opponent</div>
      </div>
      <div className="flex w-full text-xl">
        <div className="w-1/2 text-center">{counter.you}</div>
        <div className="w-1/2 text-center">{counter.opponent}</div>
      </div>
    </div>
  );
}

export default GameStats;
