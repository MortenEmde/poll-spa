import React from 'react';
import './VoteScreen.css';

function VoteScreen({ pollQuestion, pollAnswers }) {
  return (
    <div className="vote-screen">
      {pollQuestion !== '' ?
        <h3>{pollQuestion}</h3> :
        <h3>Remember to add a poll question</h3>
      }
      <form className="vote-screen-form">
        {pollAnswers.map((answer) => (
          <label key={answer.text} htmlFor={answer.text}>
            <input type="radio" id={answer.text} name={pollQuestion} />
            {answer.text}
          </label>
        ))}
        <button type="submit">Vote</button>
      </form>
    </div>
  );
}

export default VoteScreen;
