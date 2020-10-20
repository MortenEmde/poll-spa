import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

function ResultGraph({ pollQuestion, pollAnswers }) {
  const answerLabels = (answers) => {
    const labels = [];
    answers.map((answer) => labels.push(`${answer.text} (${answer.votes})`));
    return labels;
  };

  const answerVotes = (answers) => {
    const votes = [];
    answers.map((answer) => votes.push(answer.votes));
    return votes;
  };

  return (
    <Bar
      data={{
        labels: answerLabels(pollAnswers),
        datasets: [
          {
            label: pollQuestion,
            backgroundColor: '#ffcb9a',
            borderColor: '#000000',
            borderWidth: 1,
            data: answerVotes(pollAnswers),
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        height: 300,
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90,
            },
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: pollQuestion,
          fontSize: 20,
          fontColor: '#000000',
        },
      }}
    />
  );
}

ResultGraph.propTypes = {
  pollQuestion: PropTypes.string.isRequired,
  pollAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ResultGraph;
