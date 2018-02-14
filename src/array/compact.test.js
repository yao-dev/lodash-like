import { compact } from '../index';

describe('compact', () => {
  it('should return empty array', () => {
    expect(compact([])).toEqual([]);
  });
  it('should remove false value', () => {
    expect(compact([false])).toEqual([]);
  });
  it('should remove false value', () => {
    expect(compact([null])).toEqual([]);
  });
});
