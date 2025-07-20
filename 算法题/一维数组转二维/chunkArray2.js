/*
题目：
给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。
original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。
请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。

输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]

输入：original = [1,2,3], m = 1, n = 3
输出：[[1,2,3]]

输入：original = [1,2], m = 1, n = 1
输出：[]
*/

const construct2DArray = (original, m, n) => {
  if (m * n !== original.length) {
    return [];
  }
  const res = [];
  for (let i = 0; i < original.length; i += n) {
    res.push(original.slice(i, i + n));
  }
  return res;
};

const ans = construct2DArray([1, 2], 2, 2);
console.log("ans", ans);
