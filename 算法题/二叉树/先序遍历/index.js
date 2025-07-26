const { tree } = require("../index.js");

// 递归
const traversalRecursion = (tree) => {
  const res = [];
  const getNode = (node) => {
    if (!node) return;
    res.push(node.val);
    getNode(node.left);
    getNode(node.right);
  };
  getNode(tree);
  return res;
};


// 迭代（用栈模拟）后进先出
const traversalStack = (tree)=>{
    const res = [];
    const stack=[tree];

    while (stack.length) {
        const node = stack.pop();
        if (node.val) {
            res.push(node.val)
        }
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res
}

console.log("traversal-1", traversalRecursion(tree));
console.log("traversal-2", traversalStack(tree));
