/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

function markIslandsSeen(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
    return;
  }
  if (grid[i][j] !== 1) {
    return;
  }
  grid[i][j] = 2;
  markIslandsSeen(grid, i+1, j);
  markIslandsSeen(grid, i-1, j);
  markIslandsSeen(grid, i, j-1);
  markIslandsSeen(grid, i, j+1);
}

function numIslands(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        markIslandsSeen(grid, i, j);
        count++; //1
      }
    }
  }
  console.log(grid)
  return count;
}

let grid = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

console.log(numIslands(grid))

