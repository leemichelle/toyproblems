/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
one.left = two;
one.right = three;
two.right = four;
// console.log(one);

var isSameTree = function(p, q) {
  let stackP = [];
  let stackQ = [];
  let resultP = [];
  let resultQ = [];
  stackP.push(p);
  stackQ.push(q);
  while (stackP.length > 0) {
      let node = stackP.shift();
      if (node === 'null') {
        resultP.push(node);
      } else {
        resultP.push(node.value);
      }
      if (node.left === null) stackP.push('null');
      if (node.left) stackP.push(node.left);
      if (node.right === null) stackP.push('null');
      if (node.right) stackP.push(node.right);
  }
  while (stackQ.length > 0) {
      let node = stackQ.shift();
      if (node === 'null') {
        resultQ.push(node);
      } else {
        resultQ.push(node.value);
      }
      if (node.left === null) stackQ.push('null');
      if (node.left) stackQ.push(node.left);
      if (node.right === null) stackQ.push('null');
      if (node.right) stackQ.push(node.right);
  }
  console.log(resultP, resultQ)
};

console.log(isSameTree(one, one))