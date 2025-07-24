const controlTimer = (time, interval) => {
  let tempTime = time || 0;
  let isRunning = false;
  let timer = null;

  const callback = () => {
    console.log("Running time", tempTime);

    if (tempTime < 1) {
      console.log("end");

      clearInterval(timer);
      timer = null;
    }
    tempTime--;
  };

  const start = () => {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(callback, interval * 1000);
  };

  const pause = () => {
    if (!isRunning) return;
    console.log("pause");
    isRunning = false;
    clearInterval(timer);
  };

  const reset = () => {
    // 进行中状态需要暂停计时器再重置时间
    if (isRunning) {
      pause();
      tempTime = time;
      return;
    }
    // 非进行中状态直接重置时间
    tempTime = time;
  };

  return {
    start,
    pause,
    reset,
  };
};

const control = controlTimer(10, 1); // 传参单位统一为 秒-s

control.start();

setTimeout(() => {
  control.pause();
}, 4000);

// setTimeout(() => {
//   control.reset();
// }, 6000);

setTimeout(() => {
  control.start();
}, 8000);
