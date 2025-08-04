
// 用斐波那契模拟耗时操作
const fb = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fb(n - 1) + fb(n - 2);
};

console.time("fb1-执行时间");
console.log("fb(45)", fb(45));
console.timeEnd("fb1-执行时间");

self.postMessage("worker1 发送");
