const throttle = (func, interval) => {
  let timer = null;

  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      func && func.apply(this, args);
      timer = null;
    }, interval);
  };
};

// 时间戳版本节流
const throttle2 = (func, interval) => {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      func && func.apply(this, args);
      lastTime = now;
    }
  };
};
