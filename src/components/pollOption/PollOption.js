import React from 'react';
import './PollOption.css';

function PollOption({
  answer,
  deleteAnswer,
  handleChangeExistingAnswer,
}) {
  return (
    <li className="poll-option">
      <label htmlFor="option">
        <input
          type="text"
          className="poll-option-input"
          name="option"
          placeholder="Add possible answer"
          maxLength="80"
          defaultValue={answer.text}
          onBlur={handleChangeExistingAnswer}
        />
      </label>
      <button type="button" className="poll-option-btn" onClick={() => deleteAnswer(answer.text)}>
        <span role="img" aria-label="red-x">
          &#10060;
        </span>
      </button>
    </li>
  );
}

export default PollOption;
