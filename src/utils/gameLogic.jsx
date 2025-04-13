import React from 'react';
import {
  DocumentIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  ScissorsIcon,
} from '@heroicons/react/24/solid';

export const options = ['rock', 'paper', 'scissors'];

const rules = [
  { option: 'rock', beats: 'scissors' },
  { option: 'paper', beats: 'rock' },
  { option: 'scissors', beats: 'paper' },
];

export const checkWinner = async (currentOption, opponentOption) => {
  let rule = rules.find((rule) => rule.option === currentOption);
  if (rule && rule.beats === opponentOption) {
    return currentOption;
  }
  rule = rules.find((rule) => rule.option === opponentOption);
  if (rule && rule.beats === currentOption) {
    return opponentOption;
  }
  return null;
};

export const getOpponentOption = (opponentOption, winner, currentOption) => {
  if (opponentOption || winner || !currentOption) return;
  return options[Math.floor(Math.random() * options.length)];
};

export const getIcon = (option) => {
  switch (option) {
    case 'rock':
      return <HandRaisedIcon className="h-8 w-8" />;
    case 'paper':
      return <DocumentIcon className="h-8 w-8" />;
    case 'scissors':
      return <ScissorsIcon className="h-8 w-8" />;
    default:
      return <QuestionMarkCircleIcon className="h-8 w-8" />;
  }
};
