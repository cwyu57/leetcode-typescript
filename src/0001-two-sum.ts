const twoSum = (nums: number[], target: number): number[] => {
  const ret: number[] = [];
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const remaining = target - value;

    if (map.has(remaining)) {
      ret.push(map.get(remaining) as number, i);
      break;
    }
    map.set(value, i);
  }

  return ret;
};

export default twoSum;
