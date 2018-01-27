import chunk from './chunk';

describe('chunk', () => {
  it('should return empty array with size argument equal to 0', () => {
    expect(chunk([1,2,3,4,5], 0)).toEqual([]);
  });
});
