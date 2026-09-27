import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche la marque Univers Pain', () => {
  render(<App />);
  expect(screen.getAllByText(/Univers/i).length).toBeGreaterThan(0);
});
