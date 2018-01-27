import chunk from './chunk';

describe('chunk', () => {
  it('should return empty array if array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });
  it('should return empty array if negative size', () => {
    expect(chunk([1,2,3,4,5], -1)).toEqual([]);
  });
  it('should return array provide if size greater than array length', () => {
    expect(chunk([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
    expect(chunk([1,2,3,4,5], 6)).toEqual([1,2,3,4,5]);
  });
  it('should return empty array with size argument equal to 0', () => {
    expect(chunk([1,2,3,4,5], 0)).toEqual([]);
  });
  it('should return empty array with size argument equal to empty string', () => {
    expect(chunk([1,2,3,4,5], "")).toEqual([]);
  });
  it('should return array splited by arrays of 1 item with no size argument passed to the function', () => {
    expect(chunk([1,2])).toEqual([[1],[2]]);
  });
  it('should return array splited by arrays of size item (Number/String)', () => {
    expect(chunk([1,2], "1")).toEqual([[1],[2]]);
  });
});
