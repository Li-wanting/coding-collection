// 输出顺序 0 1 2 3 4 5 6

Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(7);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
