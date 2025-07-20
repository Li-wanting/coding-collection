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

