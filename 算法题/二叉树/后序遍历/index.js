const { tree } = require("../index");

// 递归
const traversalRecursion = (data) => {
  const res = [];

  const getNode = (node) => {
    if (!node) return;
    getNode(node.left);
    getNode(node.right);
    res.push(node.val);
  };
  getNode(data);
  return res;
};


console.log("treeNode", traversalRecursion(tree));
