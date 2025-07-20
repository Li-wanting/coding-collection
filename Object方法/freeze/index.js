Object.prototype.myFreeze = function (object) {
  for (const key in object) {
    // 只冻结对象自有的属性
    if (object.hasOwnProperty(key)) {
      Object.defineProperty(object, key, {
        writable: false,
        configurable: false,
      });
    }
  }
  // 不可扩展性 Object.seal 或者 Object.preventExtensions
  Object.seal(object);
};
