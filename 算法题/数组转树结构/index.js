const list = [
  { id: 1, name: "根节点", parentId: null },
  { id: 2, name: "子节点1", parentId: 1 },
  { id: 3, name: "子节点2", parentId: 1 },
  { id: 4, name: "子节点1-1", parentId: 2 },
  { id: 5, name: "子节点2-1", parentId: 3 },
];

const getTree = (list) => {
  const idMap = new Map();
  const tree = [];

  const arr = list.map((item) => {
    const newItem = {
      ...item,
      children: [],
    };
    idMap.set(item.id, newItem);
    return newItem;
  });

  arr.forEach((item) => {
    if (item.parentId === null) {
      tree.push(item);
    } else {
      const parent = idMap.get(item.parentId);
      if (parent) {
        parent.children.push(item);
      }
    }
  });

  return tree
};

const res = getTree(list);
console.log("res", res);
