/*
题目：请实现一个函数，将一维数组按照指定列数 n 拆分为二维数组，每个子数组最多包含 n 个元素，最后一组可以不满 n 个。
示例：
function chunkArray(arr: number[], n: number): number[][]

示例输入：
const input = [1, 2, 3, 4, 5, 6, 7];
const n = 3;

输出结果：
[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]
*/

/****** 方法1 
 * 用 Math.floor(index / n) 来确定当前元素在哪一行；
 * index % n 来定位当前列；
 *******/

const chunkArrayMethod1 = (arr, n)=> {
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    const current = arr[index];
    const row = Math.floor(index / n);
    if (!res[row]) {
      res[row] = [];
    }
    res[row].push(current);
  }
  return res;
};



/****** 方法2
 * 使用 Array.prototype.slice 的简洁写法
 *******/

const chunkArrayMethod2 = (arr, n) => {
  const res = [];
  for (let index = 0; index < arr.length; index += n) {
    res.push(arr.slice(index, index + n));
  }
  return res;
};

const ans = chunkArrayMethod2([1, 2, 3, 4, 5, 6, 7], 3);
console.log("ans", ans);
