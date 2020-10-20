import React from 'react';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import App from '../app/App';
import AppBoard from '../appBoard/AppBoard';
import CreatePollScreen from '../screens/createPollScreen/CreatePollScreen';
import VoteScreen from '../screens/voteScreen/VoteScreen';
import ResultsScreen from '../screens/resultsScreen/ResultsScreen';

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

  test('render AppBoard', () => {
    render(<App />);
    const appBoard = screen.getAllByRole('generic')[2];
    expect(appBoard).toHaveClass('app-board');
  });
});

// AppBoard.js Tests
describe('AppBoard.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<AppBoard />);
    expect(container).not.toBeEmpty();
  });

  test('render 3 screens in correct order', () => {
    render(<AppBoard />);
    const appBoardScreens = screen.getAllByRole('generic');
    expect(appBoardScreens[2]).toHaveClass('create-poll-screen');
    expect(appBoardScreens[4]).toHaveClass('vote-screen');
    expect(appBoardScreens[5]).toHaveClass('result-screen');
  });
});

// CreatePollScreen.js Tests
describe('CreatePollScreen.js should', () => {
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

  test('not let input fields accept more than 80 charecters', () => {
    render(<CreatePollScreen pollAnswers={pollAnswers} />);
    const inputQuestion = screen.getByPlaceholderText('Add Question');
    expect(inputQuestion.maxLength).toBe(80);

    const inputCurrentOption = screen.getAllByPlaceholderText('Add possible answer')[0];
    expect(inputCurrentOption.maxLength).toBe(80);

    const inputAddOption = screen.getByPlaceholderText('Add another possible answer');
    expect(inputAddOption.maxLength).toBe(80);
  });

  test('correctly update Possible Answers counter', () => {
    const mockAnswers = pollAnswers;
    render(<CreatePollScreen pollAnswers={[...mockAnswers, { text: 'newAnswer', votes: 0, id: uuidv4() }]} />);
    expect(screen.getByText('3/10 Possible Answers.')).toBeInTheDocument();
  });

  test('correctly update answers list when adding new answer', () => {
    const mockAnswers = pollAnswers;
    render(<CreatePollScreen pollAnswers={[...mockAnswers, { text: 'newAnswer', votes: 0, id: uuidv4() }]} />);
    expect(screen.getAllByPlaceholderText('Add possible answer').length).toBe(3);
  });

  test('correctly update answers list when removing existing answer', () => {
    const mockAnswers = [
      { text: '', votes: 0, id: uuidv4() },
      { text: '', votes: 0, id: uuidv4() },
      { text: '', votes: 0, id: uuidv4() },
      { text: '', votes: 0, id: uuidv4() },
    ];
    const { rerender } = render(<CreatePollScreen pollAnswers={mockAnswers} />);
    expect(screen.getAllByPlaceholderText('Add possible answer').length).toBe(4);
    mockAnswers.splice(1, 1);
    rerender(<CreatePollScreen pollAnswers={mockAnswers} />);
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
    render(<VoteScreen pollAnswers={pollAnswers} pollQuestion={pollQuestion} />);
    const appHeader = screen.getByRole('heading');
    expect(appHeader).toHaveTextContent('Remember to add a poll question');
  });

  test('render correct default options and vote button', () => {
    render(<VoteScreen pollAnswers={pollAnswers} />);
    expect(screen.getByRole('list')).toBeEmpty();
    expect(screen.getByRole('button')).toHaveTextContent('Vote');
  });

  test('render correct question as header', () => {
    render(<VoteScreen pollAnswers={pollAnswers} pollQuestion="My awesome question" />);
    const appHeader = screen.getByRole('heading');
    expect(appHeader).toHaveTextContent('My awesome question');
  });

  test('render correct options', () => {
    const mockAnswers = [
      { text: 'Test Option One', votes: 0, id: uuidv4() },
      { text: 'Test Option Two', votes: 0, id: uuidv4() },
    ];
    render(<VoteScreen pollAnswers={mockAnswers} />);
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });
});

// ResultsScreen.js Tests
describe.only('ResultsScreen.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<ResultsScreen pollAnswers={pollAnswers} />);
    expect(container).not.toBeEmpty();
  });

  test('render graph component', () => {
    render(<ResultsScreen pollAnswers={pollAnswers} pollQuestion={pollQuestion} />);
    const divs = screen.getAllByRole('generic');
    expect(divs[1]).not.toBeEmpty();
  });
});

/*
  Test graph renders corectly by default
  Test graph renders correctly with dynamic input
*/
