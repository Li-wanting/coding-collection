const debounce = (func, delay) => {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func && func();
    }, delay);
  };
};
