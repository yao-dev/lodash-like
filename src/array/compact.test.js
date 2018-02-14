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
});
