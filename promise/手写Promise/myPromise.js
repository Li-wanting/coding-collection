const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  aa = "2";
  #state = PENDING;
  #value = undefined;
  #handlers = [];

  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  // 判断是否满足Promise A+规范
  #isPromiseLike = (value) => {
    if (value && (typeof value === "object" || typeof value === "function")) {
      return typeof value.then === "function";
    }
    return false;
  };

  // 加入微队列任务
  #microTask = (func) => {
    queueMicrotask(func);
    return

    // 判断是否是node环境
    if (typeof process === "object" && typeof process.nextTick === "function") {
      process.nextTick(func);
      return;
    }

    // 判断是否是浏览器环境
    if (typeof MutationObserver === "function") {
      const ob = new MutationObserver(func);
      const textNode = document.createTextNode("1");
      ob.observer(textNode, {
        characterData: true,
      });
      textNode.data = "2";
      return;
    }
    setTimeout(func, 0);
  };

  #changeState = (state, value) => {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#value = value;
    this.#run();
  };

  #runOne = (callback, resolve, reject) => {
    this.#microTask(() => {
      const settled = this.#state === FULFILLED ? resolve : reject;

      // 如果then里的回调是普通值，则穿透给下一个then
      if (typeof callback !== "function") {
        settled(this.#value);
        return;
      }
      try {
        const data = callback(this.#value);

        // 处理循环调用promise自身的情况
        if (this === data) {
          reject(
            new TypeError("Chaining cycle detected for promise #<Promise>")
          );
          return;
        }

        if (this.#isPromiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  #run = () => {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();
      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      }

      if (this.#state === REJECTED) {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  };

  resolve = (value) => {
    this.#changeState(FULFILLED, value);
  };

  reject = (reason) => {
    this.#changeState(REJECTED, reason);
  };

  then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
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
        throw err;
      }
    );
  };

  static resolve = (value) => {
    // 如果该值本身就是一个 Promise，那么该 Promise 将被返回；
    if (value instanceof MyPromise) {
      return value;
    }

    let _res, _rej;
    const p = new MyPromise((resolve, reject) => {
      _res = resolve;
      _rej = reject;
    });

    if (p.#isPromiseLike(value)) {
    // 如果该值是一个 thenable 对象，Promise.resolve() 将调用其 then() 方法及其两个回调函数；
      value.then(_res, _rej);
    } else {
    // 否则，返回的 Promise 将会以该值兑现。
      _res(value);
    }

    return p;
  };

  static reject = (reason) => {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  };
}

module.exports = MyPromise;
