import React from 'react';

const StartScreen = ({ length }) => {
  return (
    <div className='start'>
      <h2>Welcome to React Quiz</h2>
      <h3>{length} questions to test your react mastery</h3>
      <button className='btn btn-ui'>Let's start!</button>
    </div>
  );
};

export default StartScreen;
