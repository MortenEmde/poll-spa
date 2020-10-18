import React from 'react';
import './PollAnswer.css';

function PollAnswer({
  answer,
  deleteAnswer,
  handleChangeExistingAnswer,
}) {
  return (
    <li className="poll-answer">
      <label htmlFor="answer">
        <input type="text" className="answer-input" name="answer" placeholder="Add answer" defaultValue={answer.text} onBlur={handleChangeExistingAnswer} />
      </label>
      <button type="button" className="answer-btn" onClick={() => deleteAnswer(answer.text)}>
        <span role="img" aria-label="red-x">
          &#10060;
        </span>
      </button>
    </li>
  );
}

export default PollAnswer;
