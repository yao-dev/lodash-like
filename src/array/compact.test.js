import { compact } from '../index';

describe('compact', () => {
  it('should return empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
