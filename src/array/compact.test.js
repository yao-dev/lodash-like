import { compact } from '../index';

describe('compact', () => {
  it('should return empty array', () => {
    expect(compact([])).toEqual([]);
  });
  it('should remove false value', () => {
    expect(compact([false])).toEqual([]);
  });
  it('should remove null value', () => {
    expect(compact([null])).toEqual([]);
  });
  it('should remove 0 value', () => {
    expect(compact([0])).toEqual([]);
  });
  it('should remove "" value', () => {
    expect(compact([""])).toEqual([]);
  });
  it('should remove undefined value', () => {
    expect(compact([undefined])).toEqual([]);
  });
  it('should remove NaN value', () => {
    expect(compact([NaN])).toEqual([]);
  });
  it('should return array of numbers', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  })
});
