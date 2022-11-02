import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

require('@testing-library/jest-dom');

describe('Test for Navbar component', () => {
  it('renders Navbar component without crashing', () => {
    const navbar = render(<Router><Navbar /></Router>);
    expect(navbar).toMatchSnapshot();
  });

  it("renders Navbar component with the correct text 'Math Magicians' ", () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  });
});
