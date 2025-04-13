import { options } from '../utils/gameLogic.js';
import { getIcon } from './GameIcons';

function Choices({ currentOption, handleOptionSelect, opponentOption }) {
  return (
    <>
      <div className="mt-5 flex flex-row items-center justify-center gap-3">
        <span className="text-center text-xl font-bold">Make your choice: </span>
        <div className="flex gap-4">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`button cursor-pointer p-4 text-xl font-bold ${
                currentOption === option ? 'text-blue-400' : ''
              }`}
              title={option}
            >
              {getIcon(option)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-center text-xl font-bold">Opponent chose:</span>
          {opponentOption ? getIcon(opponentOption) : getIcon()}
        </div>
      </div>
    </>
  );
}

export default Choices;
