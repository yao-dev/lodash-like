import { concat } from '../index';

describe('concat', () => {
  it('should return an array with concatenate function\'s arguments', () => {
    expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
  });
});
