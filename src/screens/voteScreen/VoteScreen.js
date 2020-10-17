import React, { useState } from 'react';
import './VoteScreen.css';

function VoteScreen({ pollQuestion, pollAnswers, addVote }) {
  const [voteSelection, setVoteSelection] = useState('');

  const onChangeVlaue = (e) => {
    setVoteSelection(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVote(voteSelection);
  };

  return (
    <div className="vote-screen">
      {pollQuestion !== ''
        ? <h3>{pollQuestion}</h3>
        : <h3>Remember to add a poll question</h3>}
      <form className="vote-screen-form" onChange={onChangeVlaue}>
        {pollAnswers.map((answer) => (
          <label key={answer.text} htmlFor={answer.text}>
            <input type="radio" id={answer.text} name={pollQuestion} value={answer.text} />
            {answer.text}
          </label>
        ))}
        <button type="submit" onClick={handleSubmit}>Vote</button>
      </form>
    </div>
  );
}

export default VoteScreen;
