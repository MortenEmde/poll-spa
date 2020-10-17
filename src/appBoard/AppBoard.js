import React from 'react';
import CreatePoll from '../createPoll.js/CreatePoll';
import './AppBoard.css';

let pollData = [
  {text: 'Dog', votes: 0},
  {text: 'Cat', votes: 0},
  {text: 'Bird', votes: 0},
]

function AppBoard() {
  return (
    <div className="app-board">
      <CreatePoll pollData={pollData} />
      <h3>Vote here.</h3>
      <h3>View your results here.</h3>
    </div>
  );
}

export default AppBoard;
