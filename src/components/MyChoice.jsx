import { getIcon, options } from '../utils/gameLogic.jsx';

function MyChoice({ currentOption, handleOptionSelect }) {
  return (
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
  );
}

export default MyChoice;
