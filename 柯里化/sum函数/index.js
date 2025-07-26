const sum = (...args) => {
  args = args || [];
  let total = args.reduce((a, b) => a + b, 0);

  const innerSum = (...subArgs) => {
    total += (subArgs || []).reduce((a, b) => a + b, 0);
    return innerSum;
  };
  innerSum.sumOf = () => total;
  return innerSum
};

const res = sum(1,2,1)(3,4)(5)(6).sumOf();

console.log("sum", res);
