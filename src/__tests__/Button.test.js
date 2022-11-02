import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Buttons';

require('@testing-library/jest-dom');

describe('Test for Button component', () => {
  const handleClick = jest.fn();
  it('renders Button component without crashing', () => {
    const button = render(<Button handleClick={handleClick} />);
    expect(button).toMatchSnapshot();
  });

  it('renders Button component with the correct text "AC" ', () => {
    render(<Button handleClick={handleClick} />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });

  it('User interaction with Button component', () => {
    render(<Button handleClick={handleClick} />);
    const button = screen.getByText('7');
    fireEvent.click(button);
  });

  it('User interaction with Button Component', () => {
    render(<Button handleClick={handleClick} />);
    const button = screen.getByText('7');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
