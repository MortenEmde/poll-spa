import React from 'react';
import './ResultsScreen.css';

function ResultsScreen({ pollQuestion, pollAnswers }) {
  return (
    <div className="result-screen">
      {pollQuestion !== ''
        ? <h3>{pollQuestion}</h3>
        : <h3>Remember to add a poll question</h3>}
      {pollAnswers.map((answer) => (
        <p key={answer.text}>
          {answer.text}
          :
          &nbsp;
          {answer.votes}
        </p>
      ))}
    </div>
  );
}

export default ResultsScreen;
