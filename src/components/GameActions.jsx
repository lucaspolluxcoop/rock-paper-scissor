function GameActions({ play, reset }) {
  return (
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
  );
}

export default GameActions;
