//将对象和其克隆结果缓存，weakmap保证对象在销毁时不用手动销毁缓存，不容易造成内存泄漏
const cache = new WeakMap();

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  // 有缓存则获取缓存
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  // obj是对象或者是数组
  const result = Array.isArray(obj) ? [] : {};

  // 原型统一
  Object.setPrototypeOf(result, Object.getPrototypeOf(obj));

  // 设置缓存
  cache.set(obj, result);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }
  return result;
};

const data1 = {
  name: "Lily",
  age: 30,
  parent: {
    father: "a",
    mother: "b",
    son: {
      son1: "c",
      son2: "d",
    },
  },
  hobby: ["game", "ball"],
};

const data2 = ["22222", "1212121", [2, 1, 3], { a: 1, b: 2 }];

// 构造函数
class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  func() {
    console.log("Test");
  }
}
// 自定义属性
Test.prototype.other = "111";

const data3 = new Test("Lily", 30);

// 循环引用导致无限递归克隆
data3.circle = data3;

const copyRes = deepCopy(data3);

console.log("copyRes", copyRes);
