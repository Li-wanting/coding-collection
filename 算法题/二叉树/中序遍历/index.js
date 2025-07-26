const { tree } = require("../index.js");

// 递归
const traversalRecursion = (tree) => {
  const res = [];

  const getNode = (node) => {
    if (!node) return;
    getNode(node.left);
    res.push(node.val);
    getNode(node.right);
  };

  getNode(tree);
  return res;
};

// 栈模拟迭代
const traversalStack = (tree) => {
  const res = [];
  const stack = [];
  let current = tree;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left; // 不断向左
    }

    current = stack.pop(); // 左边到底了，处理根
    res.push(current.val);
    current = current.right; // 然后转向右子树
  }

  return res;
};

console.log("treeNode", traversalRecursion(tree));
console.log("treeNode", traversalStack(tree));
