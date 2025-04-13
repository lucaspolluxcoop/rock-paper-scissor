export const options = ['rock', 'paper', 'scissors'];

const rules = [
  { option: 'rock', beats: 'scissors' },
  { option: 'paper', beats: 'rock' },
  { option: 'scissors', beats: 'paper' },
];

export const checkWinner = async (currentOption, opponentOption) => {
  const rule = rules.find(
    (rule) => 
      (rule.option === currentOption && rule.beats === opponentOption) ||
      (rule.option === opponentOption && rule.beats === currentOption)
  );
  
  if (!rule) return null;
  return rule.option === currentOption ? currentOption : opponentOption;
};

export const getOpponentOption = (opponentOption, winner, currentOption) => {
  if (opponentOption || winner || !currentOption) return;
  return options[Math.floor(Math.random() * options.length)];
};
