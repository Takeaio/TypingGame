import React from 'react';

interface ScoreBoardProps {
  score: number;
  missCount: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, missCount }) => {
  return (
    <div>
      <p>Score: {score}</p>
      <p>MissCount: {missCount}</p>
    </div>
  );
};

export default ScoreBoard;
