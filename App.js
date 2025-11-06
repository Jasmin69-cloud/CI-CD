import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dockerized app text', () => {
  render(<App />);
  const textElement = screen.getByText(/React App Dockerized Successfully/i);
  expect(textElement).toBeInTheDocument();
});
