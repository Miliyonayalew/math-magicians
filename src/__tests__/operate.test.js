import Operate from '../logic/operate';

describe('operate test', () => {
  it('should return 6', () => {
    const result = Operate(3, 3, '+');
    expect(result).toBe('6');
  });

  it('should return 0', () => {
    const result = Operate(3, 3, '-');
    expect(result).toBe('0');
  });

  it('should return 9', () => {
    const result = Operate(3, 3, 'x');
    expect(result).toBe('9');
  });

  it('should return 1', () => {
    const result = Operate(3, 3, '/');
    expect(result).toBe('1');
  });
});
