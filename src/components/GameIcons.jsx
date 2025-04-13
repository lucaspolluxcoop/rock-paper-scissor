import React, { useMemo } from 'react';
import {
  DocumentIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  ScissorsIcon,
} from '@heroicons/react/24/solid';

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

export const useGameIcon = (option) => {
  return useMemo(() => getIcon(option), [option]);
};
