import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Print the entire document's body HTML to the console for debugging
  console.log(document.body.innerHTML);
  // Attempt to find the element by text
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

