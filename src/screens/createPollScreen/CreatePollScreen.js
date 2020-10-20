import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PollAnswer from '../../components/pollOption/PollOption';
import './CreatePollScreen.css';

function CreatePollScreen({
  pollQuestion,
  pollAnswers,
  updateQuestion,
  updateAnswer,
  addAnswer,
  deleteAnswer,
  resetPoll,
}) {
  const [newAnswer, setNewAnswer] = useState('');

  // handles question update to target value
  const handleChangeQuestion = (e) => {
    updateQuestion(e.target.value);
  };

  // handles answer text update to target value
  const handleChangeExistingAnswer = (e) => {
    updateAnswer(e.target.defaultValue, e.target.value);
  };

  // updates new answer state with target value text
  const handleChangeNewAnswer = (e) => {
    setNewAnswer(e.target.value);
  };

  // handles adding new answer to main data array
  const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(newAnswer);
    setNewAnswer('');
  };

  // handles reset of main data and all input fields
  const handleReset = () => {
    resetPoll();
    setNewAnswer('');
  };

  return (
    <div className="create-poll-screen">
      <h3 className="create-poll-header">Create your Poll here</h3>
      <form>
        <label htmlFor="question">
          Question:
          <input
            type="text"
            className="question-input"
            name="question"
            placeholder="Add Question"
            maxLength="80"
            defaultValue={pollQuestion}
            onChange={handleChangeQuestion}
          />
        </label>
        <ul className="create-poll-answers-list">
          {pollAnswers.map((answer, index) => (
            <PollAnswer
              key={answer.id}
              answer={answer}
              index={index}
              deleteAnswer={deleteAnswer}
              handleChangeExistingAnswer={handleChangeExistingAnswer}
            />
          ))}
        </ul>
        <label htmlFor="addAnswer">
          Add Answer:
          <input
            type="text"
            className="add-answer-input"
            name="addAnswer"
            placeholder="Add another possible answer"
            maxLength="80"
            value={newAnswer}
            onChange={handleChangeNewAnswer}
          />
        </label>
        <button type="submit" className="add-answer-btn" onClick={handleSubmit}>Add</button>
        <div className="create-poll-footer">
          <p>
            {pollAnswers.length}
            /10 Possible Answers.
          </p>
          <label htmlFor="reset">
            <input
              type="reset"
              className="reset-btn"
              name="reset"
              value="Reset"
              onClick={handleReset}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

CreatePollScreen.propTypes = {
  pollQuestion: PropTypes.string.isRequired,
  pollAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateQuestion: PropTypes.func.isRequired,
  updateAnswer: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
  resetPoll: PropTypes.func.isRequired,
};

export default CreatePollScreen;
