import React from 'react';

interface WordDisplayProps {
  word: string;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
  return <h2>Word: {word}</h2>;
};    

export default WordDisplay;
