
// 它的底层逻辑是：

// 判断 right.prototype 是否存在于 left.__proto__ 的原型链上。

const myInstanceOf = (left, right) => {
  console.log('typeof left',typeof left);
  
    if (
      left == null ||
      (typeof left !== "object" && typeof left !== "function")
    ) {
      return false;
    }
console.log('11',typeof left);
    let proto = Object.getPrototypeOf(left);
    const prototype = right.prototype;

    while (proto) {
      if (proto === prototype) {
        return true;
      }
      proto = Object.getPrototypeOf(proto); // 这里是不断向上查找原型
    }
    return false;

};

const bool = false;

const obj = {};
const Fn = function(){};
const o = new Fn();
const result = myInstanceOf(o, Fn)&& !myInstanceOf(o, Array)

// const result = myInstanceOf(obj, Object);

console.log("myInstanceOf", result);
