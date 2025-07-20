
// func - 构造函数
// ...args - 剩余参数
function myNew(func, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将空对象的原型指向构造函数的原型
  Object.setPrototypeOf(obj, func.prototype);
  // 改变this指向，将空对象指向构造函数的上下文，执行构造函数
  const result = func.apply(obj, args);
  // 由于构造函数可能有返回值，所以此处要判断返回值是否是引用类型，是则return 构造函数返回值，否则return obj
  // ----此处是为了与原生new作用保持一致
  return result instanceof Object ? result : obj;
}

function Person(name) {
  this.name = name;
  //   return 18;
  return {
    age: 18,
  };
}

// const person = new Person('A')
const person = myNew(Person, "A");

console.log("person", person);
