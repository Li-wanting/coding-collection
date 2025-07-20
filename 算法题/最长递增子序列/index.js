function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  const result = [nums[0]];

  // 如果当前元素大于记录最后一项数字时，新增记录
  // 否则，找到记录中第一个比当前元素大或相等的数字所在下标，替换元素

  for (let i = 1; i < nums.length; i++) {
    const item = nums[i];
    if (item > result[result.length - 1]) {
      result.push(item);
    } else {
      const index = result.findIndex((it) => it >= item);
      result[index] = item;
    }
  }

  return result.length;
}

const nums1 = [10,9,2,5,3,7,101,18];
const nums2 = [0,1,0,3,2,3]
const nums3 = [7,7,7,7,7,7,7]


console.log('res',lengthOfLIS(nums1));
