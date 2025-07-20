const MyPromise = require("./myPromise");
const PromiseAll = require("./promiseAll");
const PromiseRace = require("./promiseRace");

const promise = new MyPromise((resolve, reject) => {
  //   setTimeout(() => {
  resolve(123);
  // reject(123)
  //   }, 1000);
});

// 测试嵌套promise本身
// const p1 = promise.then(
//   (res) => {
//     console.log("res", res);
//     return p1;
//   },
//   (err) => {
//     console.log("err", err);
//   }
// );
// p1.then(
//   () => {},
//   (err) => {
//     console.log("err", err.message);
//   }
// );

promise
  .then(
    (res) => {
      console.log("success-1", res);
      //   return 456
      //   throw 456
      return new MyPromise((resolve, reject) => {
        resolve("789");
      });
    },
    (err) => {
      console.log("fail-1", err);
      return 456;
    }
  )
  .then(
    (res) => {
      console.log("success-2", res);
    },
    (err) => {}
  );

console.log("同步", "哈哈哈");


// promise.catch((err) => {
//   console.log("catch", err);
// });

// promise.finally(() => {
//   console.log("finally");
// });

// MyPromise.resolve("2222").then((res) => {
//   console.log("Promise.resolve", res);
// });

// MyPromise.reject("2222").then(
//   (res) => {},
//   (err) => {
//     console.log("Promise.reject", res);
//   }
// );

// const p1 = 11; // 普通值也会被包装成 Promise
// const p2 = new Promise((resolve) => setTimeout(() => resolve(22), 1000));
// const p3 = Promise.resolve(33);
// const p4 = new Promise((resolve) => setTimeout(() => resolve(44), 500));
// const reject = Promise.reject("reject--");

// PromiseAll([p1,p2,p3,p4,reject]).then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err)
// })

// Promise.race([reject,p4]).then((res) => {
//   console.log(res);
// },(err)=>{
//   console.log(err)
// });

// PromiseRace([reject,p4]).then((res) => {
//   console.log(res);
// },(err)=>{
//   console.log(err)
// });
