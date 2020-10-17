import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmpty();
  });

  test('render correct main header', () => {
    render(<App />);
    const appHeader = screen.getAllByRole('heading')
    expect(appHeader[0]).toHaveTextContent('The Amazing Poll Application');
  });

  test('render correct create-poll header', () => {
    render(<App />);
    const appHeader = screen.getAllByRole('heading')
    expect(appHeader[1]).toHaveTextContent('Create your Poll here.');
  });

  test('render correct vote header', () => {
    render(<App />);
    const appHeader = screen.getAllByRole('heading')
    expect(appHeader[2]).toHaveTextContent('Vote here.');
  });

  test('render correct results header', () => {
    render(<App />);
    const appHeader = screen.getAllByRole('heading')
    expect(appHeader[3]).toHaveTextContent('View your results here.');
  });

});
