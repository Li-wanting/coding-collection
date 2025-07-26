// 输出顺序：2 5 9 1 3 6 8 7 4

process.nextTick(() => {
  console.log("1");
});
console.log("2");

Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 0);
});

console.log("5");

setTimeout(() => {
  console.log("6");

  Promise.resolve().then(() => {
    console.log("7");
  });

  process.nextTick(() => {
    console.log("8");
  });
}, 0);

console.log("9");
