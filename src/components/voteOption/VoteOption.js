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
    <label htmlFor={answer.text} className="vote-option">
      <input type="checkbox" className="vote-input" id={answer.text} value={answer.text} onClick={onChangeVlaue} />
      <p className="vote-text">{answer.text}</p>
    </label>
  );
}

export default VoteOption;
