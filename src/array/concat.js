/**
Creates a new array concatenating array with any additional arrays and/or values.

Arguments
array (Array): The array to concatenate.
[values] (...*): The values to concatenate.

Returns
(Array): Returns the new concatenated array.
**/
export default (...valuesToConcat) => {
  let result = [];
  valuesToConcat.forEach(value => result = result.concat(value));
  return result;
};
