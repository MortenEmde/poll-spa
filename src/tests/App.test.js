import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App.js should', () => {
  test('render without crashing', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmpty();
  });
});
