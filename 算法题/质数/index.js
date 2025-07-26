// 质数 是指 大于 1 的自然数，只能被 1 和它本身整除。

// 判断是否为质数
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.floor(Math.sqrt(num));

  for (let index = 3; index <= sqrt; index += 2) {
    if (num % index === 0) return false;
  }
  return true;
};

console.log("isPrime 2", isPrime(2));
console.log("isPrime 37", isPrime(37));

// 获取指定个数的质数
const getPrimes = (limit) => {
  const res = [2];
  let num = 3;
  while (res.length < limit) {
    if (isPrime(num)) res.push(num);
    num += 2;
  }
  return res;
};

console.log("getPrimes", getPrimes(10));


// 获取小于n的所有质数
const getAllPrimes = (limit) => {
  const res = [2];
  for (let index = 3; index <= limit; index+=2) {
    if (isPrime(index)) {
      res.push(index)
    }
  }
  return res;
};

console.log("getAllPrimes", getAllPrimes(50));
