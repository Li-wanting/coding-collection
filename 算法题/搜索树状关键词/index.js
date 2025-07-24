// 实现一个函数search可以进行关键词搜索,返回出关键词出现的链路
// 比如 search('西半') 返回 ['北京市', '朝阳区', '西半街道']
// 比如 search('朝阳区') 返回 ['北京市', '朝阳区']
// 比如 search('街道') 返回 ['北京市', '昌平区', '昌平街道']、 ['北京市', '朝阳区', '西半街道']
let testObj = {
  label: "北京市",
  child: [
    {
      label: "朝阳区",
      child: [
        {
          label: "西半街道",
        },
        {
          label: "向上向善",
        },
      ],
    },
    {
      label: "昌平区",
      child: [
        {
          label: "香水百合",
        },
        {
          label: "昌平街道",
        },
      ],
    },
  ],
};

const findPath = (keyword = "", node = {}) => {
  const result = [];

  const dfs = (currentNode, path) => {
    const newPath = [...path, currentNode.label];

    if (currentNode.label.includes(keyword)) {
      result.push(newPath);
    }

    if (currentNode.child) {
      currentNode.child.forEach((child) => {
        dfs(child, newPath);
      });
    }
  };

  dfs(node, []);
  return result;
};

const path1 = findPath("香水", testObj);
const path2 = findPath("街道", testObj);
console.log('path1',path1);
console.log('path2',path2);
