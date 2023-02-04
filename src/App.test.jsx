import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders headline', () => {
    render(<App />);

    const headline = screen.getByRole('heading');

    expect(headline.textContent).toMatch(/Violation/);
  });
});
