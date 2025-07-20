const handle = (number) => {
  const numArr = Array.from(number + "");
  console.log("numArr", numArr);
  let str = "";
  for (let index = numArr.length - 1; index >= 0; index--) {
    const ele = numArr[index];
     str = ele + str;
    if (index % 3 === 0 && index !== 0) {
      str = "," + str;
    }
  }
  return str
};

const num = 123456789;

console.log("handle", handle(num));
