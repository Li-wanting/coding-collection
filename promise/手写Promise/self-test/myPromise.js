const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const PENDING = "pending";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  #state = PENDING;
  #data = undefined;
  #handler = [];

  #isPromiseLike = (func) => {
    if (
      typeof func === "function" ||
      (typeof func === "object" && func !== null)
    ) {
      return func.then && typeof func.then === "function";
    }
    return false;
  };

  #microTask = (func) => {
    queueMicrotask(func);
    return;
  };

  #changeState = (data, state) => {
    if (this.#state !== PENDING) return;
    this.#data = data;
    this.#state = state;
    this.#run();
  };

  #runOne = (callback, resolve, reject) => {
    this.#microTask(() => {
      const settle = this.#state === FULFILLED ? resolve : reject;
      if (typeof callback !== "function" && callback !== null) {
        settle(this.#data);
        return;
      }
      try {
        const p = callback(this.#data);
        if (this === p) {
          reject(new TypeError("promise嵌套自身调用"));
          return;
        }
        if (this.#isPromiseLike(p)) {
          p.then(resolve, reject);
        } else {
          resolve(p);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  #run = () => {
    if (this.#state === PENDING) return;
    while (this.#handler.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handler.shift();
      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      }
      if (this.#state === REJECTED) {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  };

  resolve = (value) => {
    this.#changeState(value, FULFILLED);
  };
  reject = (reason) => {
    this.#changeState(reason, REJECTED);
  };

  then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      this.#handler.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
    });
  };

  catch = (onRejected) => {
    return this.then(undefined, onRejected);
  };

  finally = (onFinally) => {
    return this.then(
      (data) => {
        onFinally();
        return data;
      },
      (err) => {
        onFinally();
        return err;
      }
    );
  };

  static resolve = (value) => {
    if (value instanceof MyPromise) {
      return value;
    }
    let _res, _rej;

    const promise = new MyPromise((resolve, reject) => {
      _res = resolve;
      _rej = reject;
    });
    if (promise.#isPromiseLike(value)) {
      value.then(_res, _rej);
    } else {
      _res(value);
    }

    return promise;
  };

  static reject = (value) => {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  };

  static all = (promises) => {
    return new MyPromise((resolve, reject) => {
      if (typeof promises[Symbol.iterator] !== "function") {
        return reject(new TypeError("不可迭代"));
      }
      let total = 0;
      let resolvedCount = 0;
      let result = [];

      for (const promise of promises) {
        const index = total;
        total++;
        MyPromise.resolve(promise).then(
          (res) => {
            result[index] = res;
            resolvedCount++;
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

  static race = (promises) => {
    return new MyPromise((resolve, reject) => {
      if (typeof promises[Symbol.iterator] !== "function") {
        return reject(new TypeError("不可迭代"));
      }

      for (const promise of promises) {
        MyPromise.resolve(promise).then(resolve, reject);
      }
    });
  };
}

export default MyPromise;
// module.exports = MyPromise;
