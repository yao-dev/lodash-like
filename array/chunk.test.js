import chunk from './chunk';

describe('chunk', () => {
  it('should return empty array if array provide is not an array or empty string', () => {
    expect(chunk(1)).toEqual([]);
    expect(chunk("")).toEqual([]);
    expect(chunk({})).toEqual([]);
  });
  it('should return empty array if array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });
  it('should return empty array if negative size', () => {
    expect(chunk([1,2,3,4,5], -1)).toEqual([]);
  });
  it('should return array provide if size greater than or equal to array length', () => {
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
    expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
  });
  it('should return array splited by arrays of size item, decimal size support (Number/String)', () => {
    expect(chunk([1,2,3,4,5], 2.2)).toEqual([[1,2],[3,4],[5]]);
    expect(chunk([1,2,3,4,5], 2.5)).toEqual([[1,2],[3,4],[5]]);
    expect(chunk([1,2,3,4,5], "2.7")).toEqual([[1,2],[3,4],[5]]);
  });
});
