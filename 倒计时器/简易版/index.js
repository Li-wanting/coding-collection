const timer = (time, interval) => {
  let tempTime = time;
  const interval = setInterval(() => {
    console.log("111", tempTime);
    if (tempTime < 1) {
      clearInterval(interval);
      console.log("end");
    }
    tempTime--;
  }, interval * 1000);
};

timer(10, 1);
