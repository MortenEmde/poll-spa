import React from 'react';
import PropTypes from 'prop-types';
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
          onChange={handleChangeExistingAnswer}
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

PollOption.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteAnswer: PropTypes.func.isRequired,
  handleChangeExistingAnswer: PropTypes.func.isRequired,
};

export default PollOption;
