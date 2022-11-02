import { render, screen } from '@testing-library/react';
import Display from '../components/Display';

require('@testing-library/jest-dom');

describe('Test for Display component', () => {
  const result = '0';
  it('renders Display component without crashing', () => {
    const display = render(<Display result={result} />);
    expect(display).toMatchSnapshot();
  });

  it('renders Display component with the correct text "0" ', () => {
    render(<Display result={result} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
