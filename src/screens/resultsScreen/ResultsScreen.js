import React from 'react';
import PropTypes from 'prop-types';
import './ResultsScreen.css';
import ResultGraph from '../../components/resultGraph/ResultGraph';

function ResultsScreen({ pollQuestion, pollAnswers }) {
  const totalVotesCounter = (answers) => {
    const votesArr = [];
    answers.map((answer) => votesArr.push(answer.votes));
    return votesArr.reduce((acc, cur) => acc + cur);
  };

  return (
    <div className="result-screen">
      <div className="graph-container">
        <ResultGraph pollQuestion={pollQuestion} pollAnswers={pollAnswers} />
      </div>
      <p className="total-votes">
        Total Votes:
        &nbsp;
        {totalVotesCounter(pollAnswers)}
      </p>
    </div>
  );
}

ResultsScreen.propTypes = {
  pollQuestion: PropTypes.string.isRequired,
  pollAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ResultsScreen;
