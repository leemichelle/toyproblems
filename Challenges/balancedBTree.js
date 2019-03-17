function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let tree1 = new Node(1);
let two = new Node(2);
let three = new Node(3);
tree1.left = two;
tree1.right = three;

let tree2 = new Node(9);
let eight = new Node(8);
let seven = new Node(7);
let six = new Node(6);
let five = new Node(5);
tree2.left = eight;
tree2.right = seven;
seven.left = six;
six.left = five;

function isBalanced(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }
  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop(); //treeRoot, 0
    const node = nodePair[0]; //treeRoot
    const depth = nodePair[1]; //0
    console.log(depth);

    if (!node.left && !node.right) {

      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth); //[0]
        console.log('first', depths)

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          console.log(depths)
          return false;
        }
      }
    } else {

      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}

console.log(isBalanced(tree2))

function isBalanced(tree) {
  if (!tree) {
    return true;
  }
  let depths = [];
  let nodes = [[tree, 0]];
}