// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

const searchInsert = (arr = [], target) => {
  let left = 0;
  right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const numbers = [1, 3, 5, 6];

console.log("searchInsert", searchInsert(numbers, 6));
