function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let three = new Node(3);
let nine = new Node(9);
let twenty = new Node(20);
let fifteen = new Node(15);
let seven = new Node (7);
three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

function depthTree() 