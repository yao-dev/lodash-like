import chunk from './chunk';

describe('chunk', () => {
  describe('should return empty array', () => {
    it('if array provide is not an array or empty string', () => {
      expect(chunk(1)).toEqual([]);
      expect(chunk("")).toEqual([]);
      expect(chunk({})).toEqual([]);
    });
    it('if array is empty', () => {
      expect(chunk([], 2)).toEqual([]);
    });
    it('if negative size', () => {
      expect(chunk([1,2,3,4,5], -1)).toEqual([]);
    });

    it('with size argument equal to 0', () => {
      expect(chunk([1,2,3,4,5], 0)).toEqual([]);
    });
    it('with size argument equal to empty string', () => {
      expect(chunk([1,2,3,4,5], "")).toEqual([]);
    });
  });
  describe('should return array provide', () => {
    it('if size greater than or equal to array length', () => {
      expect(chunk([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
      expect(chunk([1,2,3,4,5], 6)).toEqual([1,2,3,4,5]);
    });
  });
  describe('should return array splited', () => {
    it('by arrays of 1 item with no size argument passed to the function', () => {
      expect(chunk([1,2])).toEqual([[1],[2]]);
    });
    it('by arrays of size item, string support', () => {
      expect(chunk([1,2], "1")).toEqual([[1],[2]]);
      expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
    });
    it('by arrays of size item, decimal size support', () => {
      expect(chunk([1,2,3,4,5], 2.2)).toEqual([[1,2],[3,4],[5]]);
      expect(chunk([1,2,3,4,5], 2.5)).toEqual([[1,2],[3,4],[5]]);
      expect(chunk([1,2,3,4,5], "2.7")).toEqual([[1,2],[3,4],[5]]);
    });
    it('by arrays of size item, string instead array support', () => {
      expect(chunk("12345", 2.2)).toEqual([["1","2"],["3","4"],["5"]]);
      expect(chunk("12345", 2.5)).toEqual([["1","2"],["3","4"],["5"]]);
      expect(chunk("12345", "2.7")).toEqual([["1","2"],["3","4"],["5"]]);
    });
  });
});
