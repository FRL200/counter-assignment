// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above

   // Act: Query the element that displays the count
   const countElement = screen.getByTestId('count');
  
   // Assert: Check if the initial count is 0
   expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // Act: Click the "+" button
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Assert: Check if the count has been incremented to 1
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
   // Act: Click the "-" button
   const decrementButton = screen.getByText('-');
   fireEvent.click(decrementButton);
 
   // Assert: Check if the count has been incremented to 1
   const countElement = screen.getByTestId('count');
   expect(countElement).toHaveTextContent('-1');
});
