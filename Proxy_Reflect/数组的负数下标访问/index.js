//参考 https://www.bilibili.com/video/BV18e4y177WR/?spm_id_from=333.337.search-card.all.click

const arr = [9, 23, 1, 6, 5, 10];

// 实现 arr[-1] = 10;

const createArr = (arr) => {
  const handler = {
    get(target, key, receiver) {
      key = Number(key);
      if (key % target.length < 0) {
        key = (key % target.length) + target.length;
      }
      // 处理边界情况
      if (key % target.length === 0) {
         key = 0;
      }
      return Reflect.get(target, key, receiver);
    },
  };

  return new Proxy(arr, handler);
};

const newArr = createArr(arr);

console.log("newArr", newArr, newArr[0]);
