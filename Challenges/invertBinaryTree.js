/* Leetcode 226
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let four = new Node(4);
let two = new Node(2);
let seven = new Node(7);
let one = new Node(1);
let three = new Node(3);
let six = new Node(6);
let nine = new Node(9);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;
seven.left = six;
seven.right = nine;

// console.log(four);

const invertTree = (root) => { //[4, 2, 1, 3, 7, 6, 9]
  let left;
  let right;
  
  if (!root) {
    return root;
  }
  if (root.left) { // [2, 1, 3]
    left = root.left

  }
  if (root.right) {
    right = root.right //[7, 6, 9]

  }
  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
}

console.log(invertTree(four));

/*
if there is a left
if there is a right



*/