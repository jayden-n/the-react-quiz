import React, { Fragment } from 'react';

const FinishedScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) {
    emoji = '🥇';
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = '🥈';
  }
  if (percentage >= 50 && percentage < 80) {
    emoji = '🥉';
  }
  if (percentage < 50) {
    emoji = '🙄';
  }

  return (
    <Fragment>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        ({Math.round(percentage)}%)
      </p>
      <p className='highscore'>(HighScore: {highscore})</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </Fragment>
  );
};

export default FinishedScreen;
