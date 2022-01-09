import fizzBuzz from '../src/0412-fizz-buzz';

describe('0412-fizz-buzz', () => {
  it('case 1', () => {
    const input = 3;
    const output = ['1', '2', 'Fizz'];
    expect(fizzBuzz(input)).toEqual(output);
  });

  it('case 2', () => {
    const input = 5;
    const output = ['1', '2', 'Fizz', '4', 'Buzz'];
    expect(fizzBuzz(input)).toEqual(output);
  });

  it('case 3', () => {
    const input = 15;
    const output = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ];
    expect(fizzBuzz(input)).toEqual(output);
  });
});
