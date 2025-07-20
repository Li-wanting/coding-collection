// new Set()
const method1 = (arr) => {
  const result = [...new Set(arr)];
  return result;
};

// filter+indexOf
const method2 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// reduce
const method3 = (arr) => {
  return arr.reduce((newArr, item) => {
    return newArr.includes(item) ? newArr : [...newArr, item];
  }, []);
};

// 利用Map的key的唯一性
const method4 = (arr) => {
  return Array.from(new Map(arr.map((item) => [item.id, item])).values());
};

const testArr = [2, 2, 1, 5, 4, 6, 4, 3, 5, 8];

const users = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jerry" },
  { id: 1, name: "Tom" },
];

console.log("method1", method1(testArr));

console.log("method2", method2(testArr));

console.log("method3", method3(testArr));

console.log("method4", method4(users));

const object = { id: 1, name: "Tom", age: 18 };

console.log(Object.entries(object));

for (const key of Object.keys(object)) {
//   console.log("key", key, new Date().toLocaleString());
}
