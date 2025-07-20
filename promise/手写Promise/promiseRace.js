const PromiseRace = (promises) => {
  return new Promise((resolve,reject)=>{

    if (typeof promises[Symbol.iterator] !== "function") {
        return reject(new TypeError(`${typeof promises} is not iterable`));
    }

    for (const promise of promises) {
        Promise.resolve(promise).then(resolve,reject)
    }
  })
};

module.exports = PromiseRace;
