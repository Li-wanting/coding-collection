const fb = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fb(n - 1) + fb(n - 2);
};

console.time("fb2-执行时间");
console.log("fb(45)", fb(44));
console.timeEnd("fb2-执行时间");

self.postMessage("worker2 发送");