import Calculate from '../logic/calculate';

describe('test calculate', () => {
  it('should be 19', () => {
    const operation = {
      total: 10,
      next: 9,
      operation: '+',
    };
    const result = Calculate(operation, '=');
    expect(result.total).toBe('19');
  });

  it('should be 1', () => {
    const operation = {
      total: 10,
      next: 9,
      operation: '-',
    };
    const result = Calculate(operation, '=');
    expect(result.total).toBe('1');
  });

  it('should be 90', () => {
    const operation = {
      total: 10,
      next: 9,
      operation: 'x',
    };
    const result = Calculate(operation, '=');
    expect(result.total).toBe('90');
  });

  it('should be 5', () => {
    const operation = {
      total: 10,
      next: 2,
      operation: '÷',
    };
    const result = Calculate(operation, '=');
    expect(result.total).toBe('5');
  });
});
