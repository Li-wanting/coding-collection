// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) （n ≥ 2）
// [ 0, 1, 1, 2,  3, 5, 8, 13, 21, 34, 55]


// 方法一
// const arr = [0, 1];
// function fib(n) {
//   if (n <= 1) return n;
//   let a = 0,
//     b = 1;
//   for (let i = 2; i <= n; i++) {
//     const temp = a + b;
//     a = b;
//     b = temp;
//     arr.push(b);
//   }
//   return b;
// }

// 方法二
const fib = (n) => {
  const fib = [0, 1];
  if (n <= 1) return n;
  for (let index = 2; index <= n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib[n];
};

console.log("fib11", fib(10));
