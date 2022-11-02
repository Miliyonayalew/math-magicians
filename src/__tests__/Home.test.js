import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

require('@testing-library/jest-dom');

describe('Test for Home component', () => {
  it('renders Home component without crashing', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it("renders Home component with the correct text 'Welcome to our page!' ", () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
