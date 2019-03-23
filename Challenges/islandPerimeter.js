/* Leetcode 463
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:

*/

/*
if hit 1, check if there is 0 or nothing to the top, left, bottom, and right
  add 1 to perimeter

create a helper function that checks for these variables

0, 1
*/
function findPerimeter(matrix) {
  let perimeter = 0;
  function helper(row, col) {
    if (matrix[row][col - 1] !== 1) {
      perimeter++;
    }
    if (matrix[row][col + 1] !== 1) {
      perimeter++;
    }
    if (matrix[row - 1][col] !== 1) {
      perimeter++;
    }
    if (matrix[row + 1][col] !== 1) {
      perimeter++;
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        helper(row, col);
      }
    }
  }
  return perimeter;
}

let input = [
[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]]

console.log(findPerimeter(input))