import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoteOption from '../../components/voteOption/VoteOption';
import './VoteScreen.css';

function VoteScreen({ pollQuestion, pollAnswers, addVote }) {
  const [voteSelection, setVoteSelection] = useState([]);

  // Add a selection if user ticks option.
  const addSelection = (selection) => {
    const newVoteSelection = voteSelection;
    newVoteSelection.push(selection);
    setVoteSelection(newVoteSelection);
  };

  // Delete a selection if user unticks option.
  const deleteSelection = (selectionToDelete) => {
    const newVoteSelection = voteSelection;
    const selectionToRemoveIndex = newVoteSelection.findIndex((selection) => (
      selection === selectionToDelete
    ));
    newVoteSelection.splice(selectionToRemoveIndex, 1);
    setVoteSelection(newVoteSelection);
  };

  // Delete an selection if answer is removed by the poll owner before vote is submited.
  const removeDeletedSelection = (selectionList) => {
    selectionList.forEach((selection, index) => {
      if (!pollAnswers.find((pollAnswer) => pollAnswer.id === selection)) {
        selectionList.splice(index, 1);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    removeDeletedSelection(voteSelection);
    addVote(voteSelection);
  };

  return (
    <div className="vote-screen">
      {pollQuestion !== ''
        ? <h3>{pollQuestion}</h3>
        : <h3>Remember to add a poll question</h3>}
      <form className="vote-screen-form">
        <ul className="vote-options-list">
          {pollAnswers.map((answer) => (
            answer.text !== ''
            && (
              <VoteOption
                key={answer.id}
                answer={answer}
                addSelection={addSelection}
                deleteSelection={deleteSelection}
              />
            )
          ))}
        </ul>
        <button type="submit" className="vote-btn" onClick={handleSubmit}>Vote</button>
      </form>
    </div>
  );
}

VoteScreen.propTypes = {
  pollQuestion: PropTypes.string.isRequired,
  pollAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addVote: PropTypes.func.isRequired,
};

export default VoteScreen;
