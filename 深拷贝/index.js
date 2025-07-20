// 参考 https://www.bilibili.com/video/BV1ZJ4m1M7go?spm_id_from=333.788.videopod.sections&vd_source=c131eeeb332288fe67cd9bdb649e875a

//将对象和其克隆结果缓存，weakmap保证对象在销毁时不用手动销毁缓存，不容易造成内存泄漏
const cache = new WeakMap();

const deepCopy = (obj) => {
  // 基本类型或者函数 都直接返回
  if (typeof obj !== "object" || obj === null) return obj;

  // 有缓存则获取缓存
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // obj是对象或者是数组
  const res = Array.isArray(obj) ? [] : {};

  // 原型统一
  Object.setPrototypeOf(res, Object.getPrototypeOf(obj));

  // 设置缓存
  cache.set(obj, res);

  for (const key in obj) {
    // 剔除构造函数上额外添加的属性
    if (obj.hasOwnProperty(key)) {
      res[key] = deepCopy(obj[key]);
    }
  }

  return res;
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
