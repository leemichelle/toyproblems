/* leetcode 807
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building 
located there. We are allowed to increase the height of any number of buildings, by any 
amount (the amounts can be different for different buildings). Height 0 is considered to 
be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, 
left, and right, must be the same as the skyline of the original grid. A city's skyline is 
the outer contour of the rectangles formed by all the buildings when viewed from a distance. 
See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] 
rectangular prism.

*/
/*
[ [3, 0, 8, 4],  rowMax = 8    (0, 0)
  [2, 4, 5, 7],  rowMax = 7    (1, 0)
  [9, 2, 6, 3],  rowMax = 9
  [0, 3, 1, 0] ] rowMax = 3
  
   9  4  8  7
  
[ [8, 4, 8, 7],
  [7, 4, 7, 7],    
  [9, 4, 8, 7],
  [3, 3, 3, 3] ]
  
get rowMax and colMax first and put into obj with coordinates
iterate through array again and assign element as less of rowMax and colMax

create a findRowMax function = (0, i rowMax)
create a findColMax function

*/

const findRowMax = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// console.log(findRowMax([3, 0, 8, 4]))

const findColMax = (matrix, col) => {
  let i = 0;
  let max = 0;
  while (i < matrix.length) {
    if (matrix[i][col] > max) {
      max = matrix[i][col]
    }
    i++;
  }
  return max;
}

const skyline = (cityMatrix) => {
  let rowMax = [];
  let colMax = [];
  let changes = 0;
  for (let i = 0; i < cityMatrix.length; i++) {
    rowMax.push(findRowMax(cityMatrix[i]));
    colMax.push(findColMax(cityMatrix, i));
  }
  for (let row = 0; row < cityMatrix.length; row++) {
    for (let col = 0; col < cityMatrix[row].length; col++) {
      let min = Math.min(rowMax[row], colMax[col]);
      // cityMatrix[row][col] = min; //if you want to print new changed matrix
      let difference = Math.abs(min - cityMatrix[row][col]);
      changes += difference;
    }
  }
  return changes;
}

let grid = [ 
[3, 0, 8, 4], 
[2, 4, 5, 7],
[9, 2, 6, 3],
[0, 3, 1, 0] ]

//9  4  8  7

console.log(skyline(grid))