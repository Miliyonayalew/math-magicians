import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

require('@testing-library/jest-dom');

describe('Test for Calculator component', () => {
  it('renders Calculator component without crashing', () => {
    const view = render(<Calculator />);
    expect(view).toMatchSnapshot();
  });
});
