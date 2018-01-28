/**
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk

Returns
(Array): Returns the new array of chunks.
**/
export default (array, size = 1) => {
  const sizeFloor = Math.floor(size);

  if (!array.length || sizeFloor <= 0) return [];
  if (array.length <= sizeFloor) return array;
  if (sizeFloor == 1) {
    return array.map(item => [item]);
  }

  const iterationNumber = Math.round(array.length / sizeFloor);
  let start = 0;
  let end = sizeFloor;

  return Array.from(Array(iterationNumber), () => {
    const group = array.slice(start, end);

    start += sizeFloor;
    end += sizeFloor;

    return group;
  });
};
