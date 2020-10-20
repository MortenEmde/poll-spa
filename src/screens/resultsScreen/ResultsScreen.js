import React from 'react';
import PropTypes from 'prop-types';
import './ResultsScreen.css';
import ResultGraph from '../../components/resultGraph/ResultGraph';

function ResultsScreen({ pollQuestion, pollAnswers }) {
  return (
    <div className="result-screen">
      <ResultGraph pollQuestion={pollQuestion} pollAnswers={pollAnswers} />
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
