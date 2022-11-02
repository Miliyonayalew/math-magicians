import { render, screen } from '@testing-library/react';
import Quote from '../pages/Qoute';

require('@testing-library/jest-dom');

describe('Test for Quote component', () => {
  it('renders Quote component without crashing', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });

  it("renders Quote component with the correct text 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston.' ", () => {
    render(<Quote />);
    expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston.')).toBeInTheDocument();
  });
});
