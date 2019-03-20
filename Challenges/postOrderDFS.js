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

function postOrderDFS(tree) {
  let data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.value);
  }
  traverse(tree);
  return data;
}

console.log(postOrderDFS(tree));