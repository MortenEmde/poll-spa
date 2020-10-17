import React from 'react';
import CreatePoll from '../createPoll.js/CreatePoll';
import './AppBoard.css';

let pollData = [
  {text: '1', votes: 0},
  {text: '2', votes: 0},
  {text: '3', votes: 0},
]

function AppBoard() {
  return (
    <div className="AppBoard">
      <CreatePoll pollData={pollData} />
      <h3>Vote here.</h3>
      <h3>View your results here.</h3>
    </div>
  );
}

export default AppBoard;
