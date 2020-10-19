import React, { useState } from 'react';
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

  const handleChangeQuestion = (e) => {
    updateQuestion(e.target.value);
  };

  const handleChangeExistingAnswer = (e) => {
    updateAnswer(e.target.defaultValue, e.target.value);
  };

  const handleChangeNewAnswer = (e) => {
    setNewAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(newAnswer);
    setNewAnswer('');
  };

  const handleReset = () => {
    resetPoll();
    setNewAnswer('');
  };

  return (
    <div className="create-poll-screen">
      <h3 className="create-poll-header">Create your Poll here.</h3>
      <form>
        <label htmlFor="question">
          Question:
          <input type="text" className="question-input" name="question" placeholder="Add Question" maxLength="80" defaultValue={pollQuestion} onChange={handleChangeQuestion} />
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
          <input type="text" className="add-answer-input" name="addAnswer" placeholder="Add another possible answer" maxLength="80" value={newAnswer} onChange={handleChangeNewAnswer} />
        </label>
        <button type="submit" className="add-answer-btn" onClick={handleSubmit}>Add</button>
        <div className="create-poll-footer">
          <p>
            {pollAnswers.length}
            /10 Possible Answers.
          </p>
          <input type="reset" className="reset-btn" vlaue="Reset" onClick={handleReset} />
        </div>
      </form>
    </div>
  );
}

export default CreatePollScreen;
