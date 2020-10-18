import React from 'react';

function VoteOption({ answer, addSelection, deleteSelection }) {
  const onChangeVlaue = (e) => {
    if (e.target.checked) {
      addSelection(e.target.value);
    } else {
      deleteSelection(e.target.value);
    }
  };

  return (
    <label htmlFor={answer.text}>
      <input type="checkbox" id={answer.text} value={answer.text} onClick={onChangeVlaue} />
      {answer.text}
    </label>
  );
}

export default VoteOption;
