const { tree } = require("../index");

// 队列模拟，先进先出
const traversalLevel = (data) => {
  const res = [];
  const queue = [data];

  while (queue.length) {
    const node = queue.shift();
    if (node.val) res.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
};

console.log("traversalLevel", traversalLevel(tree));
