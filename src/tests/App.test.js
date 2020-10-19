import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import App from '../app/App';
import CreatePollScreen from '../screens/createPollScreen/CreatePollScreen';
import VoteScreen from '../screens/voteScreen/VoteScreen';
import ResultsScreen from '../screens/resultsScreen/ResultsScreen';

// mockCavas to avoid errorthrow from react-chartjs-2
HTMLCanvasElement.prototype.getContext = jest.fn()

// default data
const pollQuestion = '';
const pollAnswers = [
  { text: '', votes: 0, id: uuidv4() },
  { text: '', votes: 0, id: uuidv4() },
];

// App.js Tests
describe('App.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmpty();
  });

  test('render correct main header', () => {
    render(<App />);
    const appHeader = screen.getAllByRole('heading');
    expect(appHeader[0]).toHaveTextContent('The Amazing Poll Application');
  });
});

// CreatePollScreen.js Tests
describe.only('CreatePollScreen.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<CreatePollScreen pollAnswers={pollAnswers} />);
    expect(container).not.toBeEmpty();
  });

  test('render correct main header', () => {
    render(<CreatePollScreen pollAnswers={pollAnswers} />);
    const appHeader = screen.getByRole('heading');
    expect(appHeader).toHaveTextContent('Create your Poll here');
  });

  test('render correct default input fields', () => {
    render(<CreatePollScreen pollAnswers={pollAnswers} />);
    expect(screen.getByPlaceholderText('Add Question')).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('Add possible answer')[0]).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('Add possible answer')[1]).toBeInTheDocument();
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('❌');
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('❌');
    expect(screen.getByPlaceholderText('Add another possible answer')).toBeInTheDocument();
    expect(screen.getAllByRole('button')[2]).toHaveTextContent('Add');
    expect(screen.getByText('2/10 Possible Answers.')).toBeInTheDocument();
    expect(screen.getAllByRole('button')[3]).toHaveValue('Reset');
  });

  test('correctly update Possible Answers counter', () => {
    const mockAnswers = pollAnswers;
    render(<CreatePollScreen pollAnswers={[...mockAnswers, { text: 'newAnswer', votes: 0, id: uuidv4() }]} />);
    expect(screen.getByText('3/10 Possible Answers.')).toBeInTheDocument();
  });

  test('correctly update answers list', () => {
    const mockAnswers = pollAnswers;
    render(<CreatePollScreen pollAnswers={[...mockAnswers, { text: 'newAnswer', votes: 0, id: uuidv4() }]} />);
    expect(screen.getAllByPlaceholderText('Add possible answer').length).toBe(3);
  });

  test('correctly update answers list when add answer button is clicked', () => {
    const mockAnswers = pollAnswers;
    render(<CreatePollScreen pollAnswers={mockAnswers} />);
    expect(screen.getAllByPlaceholderText('Add possible answer').length).toBe(2);
    const answerInput = screen.getByPlaceholderText('Add another possible answer');
    const addAnswerBtn = screen.getAllByRole('button')[2];
    fireEvent.change(answerInput, 'My new answer');
    fireEvent.click(addAnswerBtn);
    expect(screen.getAllByPlaceholderText('Add possible answer').length).toBe(3);
  });
});

// VoteScreen.js Tests
describe('VoteScreen.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<VoteScreen pollAnswers={pollAnswers} />);
    expect(container).not.toBeEmpty();
  });

  test('render correct default header', () => {
    render(<VoteScreen pollAnswers={pollAnswers} pollQuestion={'My Awesome Header'} />);
    const appHeader = screen.getByRole('heading');
    expect(appHeader).toHaveTextContent('My Awesome Header');
  });
});

// ResultsScreen.js Tests
describe('ResultsScreen.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<ResultsScreen pollAnswers={pollAnswers} />);
    expect(container).not.toBeEmpty();
  });
});
