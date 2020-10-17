import React, { useState } from 'react';
import CreatePollScreen from '../screens/createPollScreen/CreatePollScreen';
import ResultsScreen from '../screens/resultsScreen/ResultsScreen';
import VoteScreen from '../screens/voteScreen/VoteScreen';
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
    if (answers.length > 2){
      const answerToDeleteIndex = answers.findIndex((answer) => answer.text === answerToDelete);
      answers.splice(answerToDeleteIndex, 1);
      setAnswers([...answers]);
    }
  };

  const resetPoll = () => {
    setQuestion('What is your favorite animal?');
    setAnswers([
      { text: 'Dog', votes: 0 },
      { text: 'Cat', votes: 0 },
      { text: 'Bird', votes: 0 },
    ]);
  };

  return (
    <div className="app-board">
      <CreatePollScreen
        pollQuestion={question}
        pollAnswers={answers}
        updateQuestion={updateQuestion}
        addAnswer={addAnswer}
        deleteAnswer={deleteAnswer}
        resetPoll={resetPoll}
      />
      <VoteScreen pollQuestion={question} pollAnswers={answers} />
      <ResultsScreen pollQuestion={question} pollAnswers={answers} />
    </div>
  );
}

export default AppBoard;
