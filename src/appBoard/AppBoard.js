import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreatePollScreen from '../screens/createPollScreen/CreatePollScreen';
import ResultsScreen from '../screens/resultsScreen/ResultsScreen';
import VoteScreen from '../screens/voteScreen/VoteScreen';
import './AppBoard.css';

const pollQuestion = '';
const pollAnswers = [
  { text: '', votes: 0, id: uuidv4() },
  { text: '', votes: 0, id: uuidv4() },
];

function AppBoard() {
  const [question, setQuestion] = useState(pollQuestion);
  const [answers, setAnswers] = useState(pollAnswers);

  // update Question state
  const updateQuestion = (newQuestion) => {
    setQuestion(newQuestion);
  };

  // update a existing answer on input field edit
  const updateAnswer = (previousAnswer, newAnswer, answerId) => {
    const answerToUpdateIndex = answers.findIndex((answer) => answer.id === answerId);
    const updatedAnswers = [...answers];
    if (newAnswer === '' || !answers.find((answer) => answer.text === newAnswer && newAnswer !== previousAnswer)) {
      updatedAnswers[answerToUpdateIndex].text = newAnswer;
    } else {
      updatedAnswers[answerToUpdateIndex].text = `${newAnswer} !!DUPLICATE!!`;
    }
    setAnswers(updatedAnswers);
  };

  // add a new answer to existing answers array
  const addAnswer = (newAnswer) => {
    const checkForExistingAnswer = answers.find((answer) => answer.text === newAnswer);
    if (newAnswer !== '' && !checkForExistingAnswer && answers.length !== 10) {
      const newAnswers = [...answers, { text: newAnswer, votes: 0, id: uuidv4() }];
      setAnswers(newAnswers);
    }
  };

  // delete specific answer from answers array
  const deleteAnswer = (answerToDelete) => {
    if (answers.length > 2) {
      const answerToDeleteIndex = answers.findIndex((answer) => answer.text === answerToDelete);
      answers.splice(answerToDeleteIndex, 1);
      setAnswers([...answers]);
    }
  };

  // increse votes counter for submitted answers
  const addVote = (answersVoted) => {
    if (answersVoted !== []) {
      for (let i = 0; i < answersVoted.length; i += 1) {
        const answerToUpdateIndex = answers.findIndex((answer) => answer.id === answersVoted[i]);
        const updatedAnswers = [...answers];
        updatedAnswers[answerToUpdateIndex].votes += 1;
        setAnswers(updatedAnswers);
      }
    }
  };

  // reset poll state
  const resetPoll = () => {
    setQuestion('');
    setAnswers([
      { text: '', votes: 0, id: uuidv4() },
      { text: '', votes: 0, id: uuidv4() },
    ]);
  };

  return (
    <div className="app-board">
      <CreatePollScreen
        pollQuestion={question}
        pollAnswers={answers}
        updateQuestion={updateQuestion}
        updateAnswer={updateAnswer}
        addAnswer={addAnswer}
        deleteAnswer={deleteAnswer}
        resetPoll={resetPoll}
      />
      <VoteScreen pollQuestion={question} pollAnswers={answers} addVote={addVote} />
      <ResultsScreen pollQuestion={question} pollAnswers={answers} />
    </div>
  );
}

export default AppBoard;
