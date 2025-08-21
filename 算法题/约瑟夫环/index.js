// n个人，从1开始轮流报数，报到m的人出列，下一个人从1开始，直到所有人出列

// 0 1 2 3 4 5 6 7

// 1 2 3 4 5 _ 1 2
// 3 4 5 _ 1 _ 2 3
// 4 5 _ _ 1 _ 2 3
// 4 5 _ _ _ _ 1 2
// ...

const fb = (n, m) => {
  const people = Array.from({ length: n }, (_, i) => i + 1);
  const res = [];
  let index = 0;

  while (people.length > 0) {
    index = (index + m - 1) % people.length;
    res.push(people.splice(index,1)[0]);

  }
  return res;
};

const res = fb(8, 6);
console.log(res);
