import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Scaffolding Your React Project', () => {
    render(<App />);
    expect(screen.getByText('Scaffolding Your React Project 🚀')).toBeInTheDocument();
  });
});
