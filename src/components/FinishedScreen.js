import React from 'react';

const FinishedScreen = ({ points, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <p className='result'>
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.round(percentage)}%)
    </p>
  );
};

export default FinishedScreen;
