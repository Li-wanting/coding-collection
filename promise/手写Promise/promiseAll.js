const PromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // iterator /ɪtə'reɪtə/
    if (typeof promises[Symbol.iterator] !== "function") {
      const tp = typeof promises;
      return reject(
        new TypeError(
          `${tp} is not iterable(cannot read property Symbol(Symbol.iterator))`
        )
      );
    }

    let resolvedCount = 0;
    const result = [];
    let total = 0;

    for (const promise of promises) {
      const index = total;
      total++;
      Promise.resolve(promise).then(
        (res) => {
          resolvedCount++;
          result[index] = res;

          if (resolvedCount === total) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }

    if (total === 0) {
      resolve([]);
    }
  });
};

module.exports = PromiseAll;
