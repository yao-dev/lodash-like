import chunk from './chunk';

describe('chunk', () => {
  it('should take an array and return an array', () => {
    expect(chunk([])).toEqual([]);
  });
});
