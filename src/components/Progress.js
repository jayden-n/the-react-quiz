import React from 'react';

const Progress = ({ index, length, points, maxPossiblePoints, answer }) => {
  return (
    <header className='progress'>
      {/* Nice little trick to display the current status progress*/}
      <progress max={length} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {length}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
