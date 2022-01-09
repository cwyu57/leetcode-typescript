import twoSum from './index';

describe('0001-two-sum', () => {
  it('case 1', () => {
    const input = {
      nums: [2, 7, 11, 15],
      target: 9,
    };
    const output = [0, 1];
    expect(twoSum(input.nums, input.target)).toEqual(output);
  });

  it('case 2', () => {
    const input = {
      nums: [3, 7, 3],
      target: 6,
    };
    const output = [0, 2];
    expect(twoSum(input.nums, input.target)).toEqual(output);
  });
});
