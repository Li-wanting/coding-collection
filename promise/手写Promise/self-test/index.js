import MyPromise from "./myPromise.js";

// const MyPromise=require('./myPromise')

const promise = new MyPromise((resolve, reject) => {
    resolve("success");
  //   reject("fail");
});

promise
  .then(
    (res) => {
      console.log("res-1", res);
      return 11
    },
    (err) => {
      console.log("er-1r", err);
    }
  )
  .then(
    (res) => {
      console.log("res-2", res);
    },
    (err) => {
      console.log("err-2", err);
    }
  );

// const examplePromise = new Promise((resolve, reject) => {
//   resolve("example-success");
// });
// examplePromise
//   .then(
//     11,
//     (err) => {
//       console.log("er-1r", err);
//     }
//   )
//   .then(
//     (res) => {
//       console.log("res-2", res);
//     },
//     (err) => {
//       console.log("err-2", err);
//     }
//   );
