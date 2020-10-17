import React, { useState } from 'react';
import CreatePoll from '../createPoll/CreatePoll';
import './AppBoard.css';

const pollQuestion = 'What is your favorite animal?';
const pollAnswers = [
  { text: 'Dog', votes: 0 },
  { text: 'Cat', votes: 0 },
  { text: 'Bird', votes: 0 },
];

function AppBoard() {
  const [question, setQuestion] = useState(pollQuestion);
  const [answers, setAnswers] = useState(pollAnswers);

  const updateQuestion = (newQuestion) => {
    setQuestion(newQuestion);
  };

  const addAnswer = (newAnswer) => {
    const checkForExistingAnswer = answers.find((answer) => answer.text === newAnswer);
    if (newAnswer !== '' && !checkForExistingAnswer && answers.length !== 10) {
      const newAnswers = [...answers, { text: newAnswer, votes: 0 }];
      setAnswers(newAnswers);
    }
  };

  const deleteAnswer = (answerToDelete) => {
    const answerToDeleteIndex = answers.findIndex((answer) => answer.text === answerToDelete);
    answers.splice(answerToDeleteIndex, 1);
    setAnswers([...answers]);
  };

  const resetPoll = () => {
    setQuestion(pollQuestion);
    setAnswers(pollAnswers);
  };

  return (
    <div className="app-board">
      <CreatePoll
        pollQuestion={question}
        pollAnswers={answers}
        updateQuestion={updateQuestion}
        addAnswer={addAnswer}
        deleteAnswer={deleteAnswer}
        resetPoll={resetPoll}
      />
      <h3>Vote here.</h3>
      <h3>View your results here.</h3>
    </div>
  );
}

export default AppBoard;
