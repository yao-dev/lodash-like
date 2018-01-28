/**
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk

Returns
(Array): Returns the new array of chunks.
**/
export default (array, size = 1) => {
  const _size = Math.floor(size);

  if (!array.length || _size <= 0) return [];
  if (array.length <= _size) return array;
  if (_size == 1) {
    return array.map(item => [item]);
  }

  const iterationNumber = Math.round(array.length / _size);
  const _array = typeof array === 'string' ? array.split('') : array;
  let start = 0;
  let end = _size;

  return Array.from(Array(iterationNumber), () => {
    const group = _array.slice(start, end);

    start += _size;
    end += _size;

    return group;
  });
};
