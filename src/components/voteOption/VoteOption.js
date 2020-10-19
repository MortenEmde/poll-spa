import React from 'react';
import './VoteOption.css';

function VoteOption({ answer, addSelection, deleteSelection }) {
  const onChangeVlaue = (e) => {
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
          value={answer.text}
          onClick={onChangeVlaue}
        />
      </label>
      <p className="vote-option-text">{answer.text}</p>
    </li>
  );
}

export default VoteOption;
