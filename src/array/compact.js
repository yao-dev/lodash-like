/**
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

Arguments
array (Array): The array to compact.

Returns
(Array): Returns the new array of filtered values.
**/
export default (array) => {
  return array.filter((value) => ![false, null, 0, ''].includes(value));
};
