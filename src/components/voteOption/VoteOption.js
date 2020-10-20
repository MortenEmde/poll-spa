import React from 'react';
import PropTypes from 'prop-types';
import './VoteOption.css';

function VoteOption({ answer, addSelection, deleteSelection }) {
  const registerSelcetion = (e) => {
    if (e.target.checked) {
      addSelection(e.target.value);
    } else {
      deleteSelection(e.target.value);
    }
  };

  return (
    <li className="vote-option">
      <label htmlFor={answer.text}>
        <input
          type="checkbox"
          className="vote-option-input"
          id={answer.id}
          value={answer.id}
          onClick={registerSelcetion}
        />
      </label>
      <p className="vote-option-text">{answer.text}</p>
    </li>
  );
}

VoteOption.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addSelection: PropTypes.func.isRequired,
  deleteSelection: PropTypes.func.isRequired,
};

export default VoteOption;
