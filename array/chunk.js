/**
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk

Returns
(Array): Returns the new array of chunks.
**/

export default (array, size = 1) => {
  if (!array.length || size <= 0) return [];
  if (array.length <= size) return array;
  if (size == 1) {
    return array.map(item => [item]);
  }
  const iterationNumber = array.length / size;
  let start = 0;
  let end = size;

  return Array.from(Array(iterationNumber), (a,b,c) => {
    const group = array.slice(start, end);
    start += size;
    end += size;
    return group;
  });
};
