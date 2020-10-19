import React from 'react';
import './ResultsScreen.css';
import ResultGraph from '../../components/resultGraph/ResultGraph';

function ResultsScreen({ pollQuestion, pollAnswers }) {
  return (
    <div className="result-screen">
      <ResultGraph pollQuestion={pollQuestion} pollAnswers={pollAnswers} />
    </div>
  );
}

export default ResultsScreen;
