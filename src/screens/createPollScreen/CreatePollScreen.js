import React, { useState } from 'react';
import PollAnswer from '../../components/pollAnswer/PollAnswer';
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

  return (
    <div className="create-poll">
      <h3 className="create-poll-header">Create your Poll here.</h3>
      <label htmlFor="question">
        Question:
        <input type="text" name="question" placeholder="Add Question" defaultValue={pollQuestion} onChange={handleChangeQuestion} />
      </label>
      <ul className="create-poll-answers-container">
        {pollAnswers.map((answer, index) => (
          <PollAnswer
            key={answer.text}
            answer={answer}
            index={index}
            deleteAnswer={deleteAnswer}
            handleChangeExistingAnswer={handleChangeExistingAnswer}
          />
        ))}
      </ul>
      <form>
        <label htmlFor="addAnswer">
          Add Answer:
          <input type="text" name="addAnswer" placeholder="Add another possible answer" value={newAnswer} onChange={handleChangeNewAnswer} />
        </label>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
      <div className="create-poll-footer">
        <p>
          {pollAnswers.length}
          /10 Possible Answers.
        </p>
        <button type="button" onClick={() => resetPoll()}>Reset</button>
      </div>
    </div>
  );
}

export default CreatePollScreen;
