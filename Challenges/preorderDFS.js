function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let tree = new Node(10);
let six = new Node(6);
let fifteen = new Node(15);
let three = new Node(3);
let eight = new Node(8);
let twenty = new Node(20);
tree.left = six;
tree.right = fifteen;
six.left = three;
six.right = eight;
fifteen.right = twenty;

function preorderDFS(tree) {
  let data = [];
  function traverse(node) {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree);
  return data;
}

console.log(preorderDFS(tree));
