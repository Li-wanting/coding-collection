// 使用 Array.prototype.flat(Infinity)
const method1 = (arr) => {
  return arr.flat(Infinity);
};

// while + 扩展运算符
const method2 = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

// 递归（最经典写法）
const method3 = (arr) => {
  return arr.reduce((res, item) => {
    return res.concat(Array.isArray(item) ? method3(item) : item);
  }, []);
};

const arr = [1, 2, [3, 4, 5, [6, 7, [8, 9, 10]]]];

console.log("method1", method1(arr));
console.log("method2", method2(arr));
console.log("method3", method3(arr));
