// "[1,[2,[3,4],5,6,[7,[8,9]]]]" -> [1,[2,[3,4],5,6,[7,[8,9]]]]

const parse = (str) => {
  const n = str.length;
  const stack = [];
  let res = [];

  for (let i = 0; i < n; i++) {
    const item = str[i];
    if (item === "[") {
      stack.push(res);
      res = [];
    } else if (item === "]") {
      const last = stack.pop();
      res = [...last, res];
    } else if (item !== ",") {
      res.push(Number(item));
    }
  }
  return res;
};
const str = "[1,[2,[3,4],5,6,[7,[8,9]]]]";
console.log("parse", JSON.stringify(parse(str)));
