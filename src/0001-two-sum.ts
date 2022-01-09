const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const remaining = target - value;

    if (map.has(remaining)) {
      return [map.get(remaining) as number, i]
    }
    map.set(value, i);
  }

  throw new Error('Bad Input');
};

export default twoSum;
